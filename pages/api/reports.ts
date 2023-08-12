import withAdmin from "middleware/withAdmin"
import { NextApiRequest, NextApiResponse } from "next"
import { Reports } from "src/models/reporte"

export default (req: NextApiRequest, res: NextApiResponse) => {
  withAdmin(req, res, async () => {
    const reports = await Reports.find()

    res.send(reports)
  })
}