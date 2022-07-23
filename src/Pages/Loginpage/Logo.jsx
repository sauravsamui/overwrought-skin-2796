import { Image,Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'




export const Logo = () => (
<Link to={"/"}><Image src='https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg' alt='logo' width="150px" height="10vh" ml="35%" /></Link>
  

)
