import { contact } from "../assets/assets"
import { animate, motion, transform } from "framer-motion";


const Contacts = () => {
  return (
    <div className="pb-32">
      <motion.h2 
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5}}
        className="my-10 text-center text-4xl font-semibold">
        Get in touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p 
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5}}
            className="my-4">
            {contact.address}
        </motion.p>
        <motion.p 
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.7}}
            className="my-4">
            {contact.phonenum}
        </motion.p>
        <motion.a 
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5}}
            href="#" className="border-b border-neutral-900">
            {contact.email} 
        </motion.a>
      </div>
    </div>
  )
}

export default Contacts
