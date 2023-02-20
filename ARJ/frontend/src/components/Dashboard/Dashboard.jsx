import React, {Fragment} from 'react';
import {Tabs, TabList, TabPanels, TabPanel, Box, Button, useTab, useMultiStyleConfig} from '@chakra-ui/react'
import PropTypes  from 'prop-types';
import Login from '../Authentication/Login';
import Profile from '../Profile/Profile';

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
    <div className=''>
      <div className='bg-blue-600 h-12 text-white font-sans font-bold text-2xl pt-2 pl-5 w-full'>
      <a href='/'>ARJ</a>
      </div>
        <Tabs className=''>
      <TabList className='text-3xl mx-auto items-center'>
        <CustomTab>Dashboard</CustomTab>
        <CustomTab>Profile</CustomTab>
        <CustomTab>Projects</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div>Dashboard</div>
        </TabPanel>
        <TabPanel>
          <div>Profile</div>
          <Profile/>
        </TabPanel>
        <TabPanel>
          <div>Projects</div>
        </TabPanel>
      </TabPanels>
    </Tabs>
    </div>
    </>
  )
}


Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
