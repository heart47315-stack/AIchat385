app.get("/characters/search", async (req,res)=>{

  const q = req.query.q

  const chars = await prisma.character.findMany({
    where:{
      name:{
        contains:q,
        mode:"insensitive"
      }
    }
  })

  res.json(chars)

})