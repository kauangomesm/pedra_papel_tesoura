(function (){
    const como_jogar_button = document.querySelector(`aside button`) 
    const como_jogar = document.querySelector(`.como_jogar`)
    const fechar1 = document.querySelector(`.fechar1`)
    const fechar2 = document.querySelector(`.fechar2`)
    const tampa = document.querySelector(`.tampa`)
    const escolher = document.querySelector(`.escolher`)
    const jogar = document.querySelector(`.jogar`)
    const sua_escolha = document.querySelector(`#sua_escolha`)
    const maquina_escolha = document.querySelector(`#maquina_escolha`)
    const espera = document.querySelector(`.espera`)
    const jogarNovamente = document.querySelector(`#result button`)
    const score_msg = document.querySelector(`.score`)
    const d_msg = document.querySelector(`#result`)
    const msg = document.querySelector(`#result p`)

     score_msg.textContent = getScoreData()
    console.log(score_msg)
    function getScoreData(){
        return parseInt(localStorage.getItem(`_score`)) || 0
    }

    function setnewScore(){
        localStorage.setItem(`_score`, score_msg.textContent)
    }

   
    escolher.addEventListener(`click`, fEscolher)

    como_jogar_button.addEventListener(`click`, () => {
        como_jogar.classList.remove(`display_none`)
        como_jogar.classList.add(`display_flex`)

        tampa.classList.remove(`display_none`)
        tampa.classList.add(`display_block`)
        
    })

    fechar1.addEventListener(`click`, () => {
        como_jogar.classList.remove(`display_flex`) 
        como_jogar.classList.add(`display_none`)
        tampa.classList.remove(`display_block`)
        tampa.classList.add(`display_none`)
    })

    fechar2.addEventListener(`click`, () => {
        como_jogar.classList.remove(`display_flex`)
        como_jogar.classList.add(`display_none`)
        tampa.classList.remove(`display_block`)
        tampa.classList.add(`display_none`)
    })

    function fEscolher(e){
      if(e.target.getAttribute(`atr`)){
        fJogar( e.target.getAttribute(`atr`))
      }
    }

    function fJogar(e){

        const escolha = e
        escolher.classList.remove(`display_block`)
        escolher.classList.add(`display_none`)
        
        jogar.classList.remove(`display_none`)
        jogar.classList.add(`display_flex`)

        if(escolha === `papel`){
            const div_escolhido = document.createElement(`div`)
            const img = document.createElement(`img`)
            div_escolhido.classList.add(`escolhido`)
            div_escolhido.classList.add(`jescolha`)

            div_escolhido.style.border = `15px solid #4E73F1`
            div_escolhido.style.boxShadow = `0px 6px #2642C6, inset 0px 5px #B5C5D3`
            img.setAttribute(`src`, `images/icon-paper.svg`)
            img.setAttribute(`alt`, `papel`)
            div_escolhido.append(img)

            sua_escolha.append(div_escolhido)
        }

        else if(escolha === `tesoura`){
            const div_escolhido = document.createElement(`div`)
            const img = document.createElement(`img`)
            div_escolhido.classList.add(`escolhido`)
            div_escolhido.classList.add(`jescolha`)

            div_escolhido.style.border = `15px solid #E5A431`
            div_escolhido.style.boxShadow = `0px 6px #BF6B2A, inset 0px 5px #B5C5D3`
            
            img.setAttribute(`src`, `images/icon-scissors.svg`)
            img.setAttribute(`alt`, `tesoura`)
            div_escolhido.append(img)

            sua_escolha.append(div_escolhido)
        }

        else if(escolha === `pedra`){
            const div_escolhido = document.createElement(`div`)
            const img = document.createElement(`img`)

            div_escolhido.classList.add(`escolhido`)
            div_escolhido.classList.add(`jescolha`)

            div_escolhido.style.border = `1rem solid #D94461`
            div_escolhido.style.boxShadow = `0px 6px #A71631, inset 0px 5px #B5C5D3`
            
            img.setAttribute(`src`, `images/icon-rock.svg`)
            img.setAttribute(`alt`, `pedra`)
            div_escolhido.append(img)

            sua_escolha.append(div_escolhido)
        }

        setTimeout(() => {
            espera.classList.remove(`display_block`)
            espera.classList.add(`display_none`)
            let maquinaEscolha = parseInt(Math.random() * 3)

            if(maquinaEscolha === 0){
                
                const div_escolhido = document.createElement(`div`)
                const img = document.createElement(`img`)
                div_escolhido.setAttribute(`class`, `escolhido`)
                
                div_escolhido.style.border = `1rem solid #D94461`
                div_escolhido.style.boxShadow = `0px 6px #A71631, inset 0px 5px #B5C5D3`
                div_escolhido.setAttribute(`ec`, `pedra`)
                div_escolhido.classList.add(`mEscolha`)
                
                img.setAttribute(`src`, `images/icon-rock.svg`)
                img.setAttribute(`alt`, `pedra`)
                div_escolhido.append(img)
                
                maquina_escolha.append(div_escolhido)
                
            }
            else if(maquinaEscolha === 1){
                
                const div_escolhido = document.createElement(`div`)
                const img = document.createElement(`img`)
                div_escolhido.setAttribute(`class`, `escolhido`)
                
                div_escolhido.style.border = `15px solid #4E73F1`
                div_escolhido.style.boxShadow = `0px 6px #2642C6, inset 0px 5px #B5C5D3`
                div_escolhido.setAttribute(`ec`, `papel`)
                div_escolhido.classList.add(`mEscolha`)
                
                img.setAttribute(`src`, `images/icon-paper.svg`)
                img.setAttribute(`alt`, `papel`)
                div_escolhido.append(img)
                
                maquina_escolha.append(div_escolhido)
                
            }
            else if(maquinaEscolha === 2){
                
                const div_escolhido = document.createElement(`div`)
                const img = document.createElement(`img`)
                div_escolhido.setAttribute(`class`, `escolhido`)
    
                div_escolhido.style.border = `15px solid #E5A431`
                div_escolhido.style.boxShadow = `0px 6px #BF6B2A, inset 0px 5px #B5C5D3`
                div_escolhido.setAttribute(`ec`, `tesoura`)
                div_escolhido.classList.add(`mEscolha`)
                
                img.setAttribute(`src`, `images/icon-scissors.svg`)
                img.setAttribute(`alt`, `tesoura`)
                div_escolhido.append(img)
                
                maquina_escolha.append(div_escolhido)
                
            }



            const _maquinaEscolha = document.querySelector(`.mEscolha`).getAttribute(`ec`)

            calcularVencedor(escolha, _maquinaEscolha)
          }, "3000");
          

        
        
        
    }

    function calcularVencedor(jogador, maquina){
        if(jogador === maquina){
            //empate
            msg.textContent = `Empate`
            d_msg.classList.remove(`display_none`)
            d_msg.classList.add(`display_flex`)


        }
        
        else if(jogador === `pedra` && maquina === `tesoura` || jogador === `tesoura` && maquina === `papel` || jogador === `papel` && maquina === `pedra`){
            //vitoria
        
            const _jogador = document.querySelector(`.jescolha`)
            msg.textContent = `você ganhou`
            d_msg.classList.remove(`display_none`)
            d_msg.classList.add(`display_flex`)

            _jogador.style.boxShadow = `0px 0px 0px 95px rgba(255, 255, 255, 0.01), 0px 0px 0px 45px rgba(255, 255, 255, 0.04), ${_jogador.style.boxShadow}`

            score_msg.textContent = parseInt(score_msg.textContent) + 1
            setnewScore()
        }
        
        else if(maquina === `pedra` && jogador === `tesoura` || maquina === `tesoura` && jogador === `papel` || maquina === `papel` && jogador === `pedra`){
            //derrota
            const _jogador = document.querySelector(`.mEscolha`)
            msg.textContent = `você perdeu`
            d_msg.classList.remove(`display_none`)
            d_msg.classList.add(`display_block`)
            _jogador.style.boxShadow = `0px 0px 0px 95px rgba(255, 255, 255, 0.01), 0px 0px 0px 45px rgba(255, 255, 255, 0.04), ${_jogador.style.boxShadow}`

        }

    }
    jogarNovamente.addEventListener(`click`, reset)

    function reset(){
        const jogador = document.querySelector(`.jescolha`)
        const mjogador = document.querySelector(`.mEscolha`)
        sua_escolha.removeChild(jogador)
        maquina_escolha.removeChild(mjogador)

        escolher.classList.remove(`display_none`)
        escolher.classList.add(`display_block`)

        jogar.classList.remove(`display_flex`)
        jogar.classList.add(`display_none`)

        espera.classList.remove(`display_none`)
        espera.classList.add(`display_block`)

        d_msg.classList.remove(`display_flex`)
        d_msg.classList.add(`display_none`)
    }
})()