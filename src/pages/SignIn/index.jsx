import React from "react";
import styles from './style.module.scss'


function SignIn() {
    return (
        <div className={styles ["signIn-box"]}>
            <form className={styles ["inputs-box"]} action="">
                
                    <input type="text" placeholder="login"/>
                    <input type="text" placeholder="password"/>
                
            </form>
            <div className={styles["btn"]}>
                <button className={styles["btnSignIn"]}>Sign in</button>
            </div>
        </div>
    )
}

export default SignIn