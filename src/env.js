let BASE = ""
if(process.env.NODE_ENV === "production") {
    BASE = "/My-List"
}

export default BASE;