
const Job = require("../models/Jobs")

exports.createJob = async (req, res) => {
    const newJob = new Job(req.body)
    try {
        await newJob.save()
        res.status(201).json(newJob)
    } catch (error) {
        res.status(400).status(error)
    }

}

exports.getOneJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id)
        res.status(200).json(job)
    } catch (error) {
        res.status(404).json(error)
    }
}

exports.getJobs = async (req, res) => {
    const { cat, price, page } = req.query

    try {
        const allJobs = await Job.find({});

        if(cat && !price){
            const filteredJobs = allJobs.filter(p => p.category.toLowerCase() == cat.toLowerCase())
            return res.status(200).json(filteredJobs)
        }

        if(price && !cat){
             if(price.toLowerCase() == "cheap"){
                const filteredJobs = allJobs.filter(p => p.price < 5000)
                return res.status(200).json(filteredJobs)
             } else if(price.toLowerCase() == "afford"){
                const filteredJobs = allJobs.filter(p => p.price > 5000 && p.price < 10000)
                return res.status(200).json(filteredJobs)
             }
              else {
                const filteredJobs = allJobs.filter(p => p.price > 10000)
                return res.status(200).json(filteredJobs)
             }
        }

        if(price && cat){
            if(price.toLowerCase() == "cheap"){
                const filteredJobs = allJobs.filter(p => p.category.toLowerCase() == cat.toLowerCase() && p.price < 5000)
                return res.status(200).json(filteredJobs)
            } else if(price.toLowerCase() == "afford"){
                const filteredJobs = allJobs.filter(p => p.category.toLowerCase() == cat.toLowerCase() && (p.price > 5000 && p.price < 10000))
                return res.status(200).json(filteredJobs)
             } else {
                const filteredJobs = allJobs.filter(p => p.category.toLowerCase() == cat.toLowerCase() && p.price > 10000)
                return res.status(200).json(filteredJobs)
             }
        }
        // const page = parseInt(page) || 1
        // const pageSize = parseInt(limit) || 3
        // const skip = (page - 1) * pageSize
        // const total = await User.countDocuments()
        // const pages = Math.ceil( total / pageSize )
        // query = query.skip(skip).limit(pageSize)
        // const results = await query

        // if(page > pages) {
        //     return res.status(404).json('page not found')
        // }

        // res.status(200).json({
        //     count: results.length,
        //     page,
        //     pages,
        //     data: results
        // })
        return res.status(200).json(allJobs)
    } catch (err) {
        return res.status(400).json(err)
    }
}

exports.updateJob = async (req, res) => {
    try {
        const thisJob = await Job.findByIdAndUpdate(req.query.id, {
                $set: req.body
            },{new: true}
        );
        res.status(200).json(thisJob) 
    } catch (error) {
        res.status(401).json(error)  
    }
}

exports.deleteJob = async (req, res) => {
    try {
        await Job.findByIdAndDelete(req.query.id);
        res.status(200).json("Job deleted") 
    } catch (error) {
        res.status(404).json(error)  
    }
}