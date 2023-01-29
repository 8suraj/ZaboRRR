import { useEffect,useState } from "react";

const DarkMode = () => {
    let initialState;
    const body = document.body;
    const darkTheme = 'darkMode';
	if (localStorage) {
		initialState = localStorage.getItem('theme');
        console.log(initialState);
	}
    if (initialState === darkTheme) {
        body.classList.add(initialState);
    } 
    const [theme,setTheme] = useState(initialState)
    useEffect(()=>{
        if (theme === darkTheme) {
			document.body.classList.toggle(darkTheme);
			localStorage.setItem('theme', 'darkMode');
        }else{
            document.body.classList.toggle(darkTheme);
			localStorage.setItem('theme', '');
        }
    },[theme])


    const toggleTheme = () => {
        setTheme((curr) => (curr === ' ' ? 'darkMode' : ' '));
        console.log("dd");
    };
	return (
		<button
			onClick={() => toggleTheme()}>mode</button>
	);
};

export default DarkMode;
