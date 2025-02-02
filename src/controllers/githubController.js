import { getAccessTokenAndUser, setPublicEnigmaMember } from "../repository/github.js"

export const authCallbackController = async (req, res, next) => {
	const { code } = req.query
	try {
		let data = await getAccessTokenAndUser(code)
		if(!await setPublicEnigmaMember(data.user, data.accessToken)) {
			return res.badRequest('Membership not public')
		}
		res.ok(data)
	}
	catch(err) {
		res.sendStatus(400)
	}
}
