import styles from './errorpage.module.css'
import { useNavigate } from 'react-router-dom';
import {getGif} from '../../api/getData.js'
import { useEffect, useState } from 'react';

export function ApiErrorPage(props) {
    const navigate = useNavigate();
    return(
        <div className={styles.errorContainer}>
            <div className={styles.errorIcon}>⚠️</div>
            <div className={styles.errorTitle}>Oops! Something went wrong.</div>
            <div className={styles.errorMessage}>
                We couldn't process your request.<br />
                Please try again later or return to the homepage.
            </div>
            <div className={`horizontal-flexbox`}>
                <button className={styles.homeButton} onClick={() => {props.setApiError(false);navigate('/')}}>Go Home</button>
                <button className={styles.homeButton} onClick={() => {props.setSike(true)}}>Check The Reasons</button>
            </div>
        </div>
    )
}

export function Sike(props) {
    return(
        <div className={styles.errorContainer}>
            <div className={`${styles.errorIcon} ${styles.sikeText}`}>💀💀💀</div>
            <div className={`${styles.errorTitle} ${styles.sikeText}`}>Sike</div>
            <button className={`${styles.sike} ${styles.homeButton}`} onClick={() => {props.setReal(true); props.setSike(false)}}>But For Real Tho</button>
        </div>
    )
}

export function Real(props) {
    const navigate = useNavigate();
    const [gif, setGif] = useState(null);
    useEffect(() => {
        async function gifgetter() {
            try {
                const url = await getGif();
                setGif(url); // Update state with the GIF URL
                console.log('GIF URL:', url);
            } catch (error) {
                console.error('Error fetching GIF:', error);
            }
        }
        gifgetter()
        return () => {
            setGif(null)
        };
    }, []);
    return(
        <div className={`vertical-flexbox ${styles.errorContainer}`}>
            <div className={`big-text biggest-font-weight`}>BUT FOR REAL</div>
            <div className={`biggest-font-weight`}>It wasn't me. The API responded with an ERROR. BLAME HIM!</div>
            {/* <div className={`${styles.gif}`} style={{backgroundImage: `url(${gif})`}} ></div> */}
            <div className={`${styles.imgCont}`}>
                <div className={`${styles.appear}`}>Anyway Here's a randomly generated gif. Hope you find it funny</div>
                <img src={`${gif}`} className={`${styles.gif}`} alt='DAMN AN ERROR HERE TOO...SMH...BAD LUCK' />
            </div>
            <button className={`${styles.homeButton} ${styles.real}`} onClick={() => {props.setApiError(false); props.setReal(false);navigate('/')}}>Go Home</button>
            <p>This Time For Real Real</p>
        </div>
    )
}