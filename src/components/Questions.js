import React from "react";

export default function Question(props){

    const [stage,setStage] = React.useState("1");
    const [classResult, setClassResult] = React.useState("flashcard");
    const [iconResult, seticonResult] = React.useState("");
    

    function ChangeStage1(className,iconname){
        if(className === "wrong"){
            setClassResult("flashcard wrong");
            seticonResult("close-circle");
        }
        if(className === "almost"){
            setClassResult("flashcard almost");
            seticonResult("help-circle");
        }
        if(className === "right"){
            setClassResult("flashcard right");
            seticonResult("checkmark-circle");
        }

        props.setArrayResult([...props.arrayResult, iconname]);
        props.setArrayStats([...props.arrayStats, className]);
    }

    if(stage === "1"){
        return (
            <>
                <div className={classResult} onClick={()=>setStage("2")}>
                    <h4> Pergunta {props.id+1}</h4>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </> 
        )
    }
    if(stage === "2"){
        return (
            <>
                <div className="question">
                    <p> {props.question}</p>
                    <ion-icon  onClick={()=>setStage("3")} name="refresh-outline"></ion-icon>
                </div>
            </> 
        )
    }
    if(stage === "3"){
        const button = [
            {
                className: "wrong",
                text: "Não lembrei",
                iconname:"close-circle"
            },
            {
                className: "almost",
                text: "Quase não lembrei",
                iconname:"help-circle"
            },
            {
                className: "right",
                text: "Zap!",
                iconname:"checkmark-circle"
            },

        ]

        return (
        <>
            <div className="answers" onClick={()=>setStage("4")}>
                <p> {props.answer}</p>
                <div className="buttonsAnswer">
                    {
                        button.map(({text, index, className, iconname})=>{
                            return(
                            <button className={className} key={index} iconname={iconname} onClick={()=> {
                                ChangeStage1(className,iconname);
                                }} >
                                {text}
                            </button>)
                        })
                    }
                </div>
            </div>
        </> 
        )
    }
    if(stage === "4"){
        return (
            <>
                <div className={classResult} onClick={()=>setStage("2")}>
                    <h4> Pergunta {props.id+1}</h4>
                    <ion-icon name={iconResult}></ion-icon>
                </div>
            </> 
        )
    }
}

function RandomQuestions(){
    return Math.random() -0.5;
}

export default function Questions(props){

    // Logic
    const items =[
        { question: "O que é JSX?",
          answer:"Uma extensão de linguagem do JavaScript"
        },
        { question: "O React é __",
          answer:"uma biblioteca JavaScript para construção de interfaces"
        },
        { question: "Componentes devem iniciar com __",
          answer:"letra maiúscula"
        },
        { question: " Podemos colocar __ dentro do JSX",
          answer:"expressões"
        },
        { question: "O ReactDOM nos ajuda __",
          answer:"interagindo com a DOM para colocar componentes React na mesma"
        },
        { question: "Usamos o npm para __ ",
          answer:"gerenciar os pacotes necessários e suas dependências"
        },
        { question: "Usamos props para __",
          answer:"passar diferentes informações para componentes"
        },
        { question: "Usamos estado (state) para __ ",
          answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ]

    const questions = items
        .sort(RandomQuestions)
        .map((item,index)=>(
            <Question key={index} id={index} question={item.question} answer={item.answer} arrayStats={props.arrayStats} setArrayStats={props.setArrayStats} arrayResult={props.arrayResult} setArrayResult={props.setArrayResult} />
            ))

    return (
        <>
            {questions}
        </> 
    );
}