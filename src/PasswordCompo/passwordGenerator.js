import { useState } from 'react';
import React from 'react';
import { numbers,upperCaseLetters,lowerCaseLetters,specialCharacters } from './characterLIst';
import './passwordGenerator.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 

    const PassWordGenerator = () => {
        const [password,setPassword] = useState('');
        const [passwordLength,setPassswordLength] = useState(26);
        
        const [includeNumbers,setIncludeNumbers] = useState(false);
        const [includeUpperCase,setIncludeUpperCase] = useState(false);
        const [includeLowerCase,setIncludeLowerCase] = useState(false);
        const [includeSymbols,setIncludeSymbols] = useState(false);

    const handleGeneratePassword = () =>{
        if(!includeLowerCase && !includeNumbers && !includeSymbols && !includeUpperCase){
            notify("Please choice your key word",true)
        }
        else{
            let characterList = "";
            if(includeNumbers){
                characterList = characterList + numbers
            }
            if(includeLowerCase){
                characterList =characterList + lowerCaseLetters
            }
            if(includeUpperCase){
                characterList = characterList + upperCaseLetters
            }
            if(includeSymbols){
                characterList = characterList + specialCharacters
            }
            setPassword(createPassword(characterList));
            notify("your password is successfully generated...!",false)
            console.log(password);
        }
    }
    const createPassword = (characterList) => {
        let password = ''
        let characterListLength = characterList.length;
            console.log(characterListLength)
        for(let i=0;i<passwordLength;i++){
            const passwordIndex = Math.round(Math.random()*characterListLength);
            console.log(passwordIndex);
            password = password + characterList.charAt(passwordIndex)
        }
        return password;
    }
    
    const copyClickboard = (setPassword) => {
        navigator.clipboard.writeText(password)
    }

    const notify = (message, hasError = false) => {
        if (hasError) {
          toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        else {
          toast(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
    
      }
    const copyMessage = () =>{
        if(password === ""){
            notify("Please Generate Your Password First",true)
        }else{
            copyClickboard(password);
            notify("Your Successfully Copied...Thank U!")
        }
    }


    return(
        <div className='password__generator'>
           <div className='password__header'><h1>Password Generator</h1></div>
        <div className='password__screen'>
            <div className='password__showPlace'>{password}</div>
            <button className='copy__btn' onClick={copyMessage}>
               <i className="far fa-clipboard"></i>
            </button>
        </div>

        <div className="characterList">
            <label htmlFor="password-strength">Password length</label>
            <input className="pw"type="number" id="password-stregth" name="password-strength" max="26" min="8" defaultValue={passwordLength} onChange={(e)=>{setPassswordLength(e.target.value)}}/>
          </div>

        <div className='characterList'>
            <div className='characterList__numbers'>
                <label className='numbers__label'>Do You wannt to add Numbers ?</label>
                <input type='checkbox' id="numberId" checked={includeNumbers} onChange={(e)=>{setIncludeNumbers(e.target.checked)}}/>
            </div>
        </div>

        <div className='characterList'>
            <div className='characterList__upperCaseLetters'>
                <label className='upperCaseLetters__label'>Do You wannt to add UpperCaseLetters ?</label>
                <input type='checkbox'id='upperCaseId'checked={includeUpperCase} onChange={(e)=>{setIncludeUpperCase(e.target.checked)}}/>
            </div>
        </div>

        <div className='characterList'>
            <div className='characterList__lowerCaseLetters'>
                <label className='lowerCaseLetters__label'>Do You wannt to add LowerCaseLetters ?</label>
                <input type='checkbox'id='lowerCaseId'checked={includeLowerCase} onChange={(e)=>{setIncludeLowerCase(e.target.checked)}}/>
            </div>
        </div>

        <div className='characterList'>
            <div className='characterList__symbols'>
                <label className='symbols__label'>Do You wannt to add SpecialCharacters ?</label>
                <input type='checkbox'id='symbolId'checked={includeSymbols} onChange={(e)=>{setIncludeSymbols(e.target.checked)}}/>
            </div>
        </div>

        <button className='generate__password' onClick={handleGeneratePassword}>Generate Password</button>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
    )
}

export default PassWordGenerator;
