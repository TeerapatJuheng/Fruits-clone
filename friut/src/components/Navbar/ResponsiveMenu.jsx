import { motion ,AnimatePresence } from "framer-motion"


const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
        {
            open &&(
                <div>
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Servers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            )
        }
    </AnimatePresence>
  )
}

export default ResponsiveMenu
