import React, {Fragment} from 'react';
import {Tabs, TabList, TabPanels, TabPanel, Box, Button, useTab, useMultiStyleConfig} from '@chakra-ui/react'
import PropTypes  from 'prop-types';
import Login from '../Authentication/Login';

export default function Dashboard (){
  const CustomTab = React.forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps['aria-selected']

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig('Tabs', tabProps)

    return (
      <Button __css={styles.tab} {...tabProps}>
        <Box as='span' mr='2'>
          {isSelected ? '😎' : '😐'}
        </Box>
        {tabProps.children}
      </Button>
    )
  })
  return (
    <>
        <Tabs>
      <TabList>
        <CustomTab>One</CustomTab>
        <CustomTab>Two</CustomTab>
        <CustomTab>Three</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
      </TabPanels>
    </Tabs>
    </>
  )
}


Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
