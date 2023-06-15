const Profile = require('../models/candidateProfile');

exports.createCandidateProfile = async (req, res) => {
    try {
        const token = { id: req.body._id };
        const profile = Profile.findById(req.params.id);
        if (!profile) {
            await Profile.create(req.body);
            console.log(req.body);
            res.status(201).send({
              message: "Profile created successfully",
              data: Profile,
            });
        }
           await Profile.updateMany(req.body)
            console.log(req.body)
            res.status(201).send({
                message: "Profile created successfully",
                data:Profile
            })
    } catch {
        res.status(501).send({
            message:"Internal server error"
        })
    }
}


