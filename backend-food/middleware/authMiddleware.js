import jwt from 'jsonwebtoken';
function verifyToken(req, res, next) {
  const tokens = req.headers["authorization"];
  const token=tokens.split(" ")[1]
  if (!token) return res.status(401).json({ error: "Access denied" });
 
    const decoded = jwt.verify(token, "basanti",(err,user)=>{
        if(err) {
            return res.status(401).json({ error: "Invalid token" })
        };
        req.user=user;
        next();
    });
   
}
export default verifyToken;
