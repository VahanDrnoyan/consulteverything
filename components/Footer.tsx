import styles from '../styles/Home.module.css'
const Footer = ()=>{
    return (
        <footer className={styles.footer} style={{ backgroundColor: "#111", paddingTop: '50px', paddingBottom: '50px'}}>
                <span style={{ color: '#fff' }}> Powered by &copy;consulteverything.com</span>
            
            </footer>
    )
}
export default Footer