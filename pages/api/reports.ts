import connectDB from "middleware/mongoose"
import withAdmin from "middleware/withAdmin"
import { NextApiRequest, NextApiResponse } from "next"
import { Reports } from "src/models/reporte"

export default connectDB((req: NextApiRequest, res: NextApiResponse) => {
  withAdmin(req, res, async () => {
    const reports = await Reports.find()

    res.send(reports)
  })
})