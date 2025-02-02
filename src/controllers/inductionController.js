import { createInduction, editInductionById, getAllInductions, getInductionById, inductionExistsByEmail, inductionExistsByGitHub, inductionExistsByHackerEarth, inductionExistsByWhatsAppNumber } from "../repository/induction.js"

export const createInductionController = async (req, res, next) => {
	try {
		let data = req.body
		if(
			await inductionExistsByEmail(data.email) ||
			await inductionExistsByWhatsAppNumber(data.whatsapp_no) ||
			await inductionExistsByGitHub(data.github_profile_url) ||
			await inductionExistsByHackerEarth(data.hackerearth_profile_url)
		) {
			return res.sendStatusResponse(409, 'You are already registered.')
		}
		if(!await createInduction(data)) {
			return res.sendStatusResponse(500, 'Internal Server Error. Try again later.')
		}
		return res.sendStatus(201)
	}
	catch(err) {
		next(err)
	}
}

export const getAllInductionController = async (req, res, next) => {
	try {
		let allInductions = await getAllInductions()
		return res.ok({
			message: 'All inductions fetched',
			allInductions
		})
	}
	catch(err) {
		// console.log(err)
		next(err)
	}
}

export const getInductionByIdController = async (req, res, next) => {
	try {
		const { id } = req.params
		const induction = await getInductionById(id)
		if(!induction) {
			return res.sendStatus(404)
		}
		return res.ok(induction)
	}
	catch(err) {
		res.sendStatus(500)
	}
}

export const editInductionByIdController = async (req, res, next) => {
	try {
		const { id } = req.params
		const data = req.body
		const updatedInduction = await editInductionById(id, data)
		if(!updatedInduction) return res.sendStatus(400)
		res.ok(updatedInduction)
	}
	catch(err) {
		res.sendStatus(500)
	}
}
