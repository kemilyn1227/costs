import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}){
    return(

        <form className={styles.form}>

            <Input 
                type='text' 
                text='nome do projeto'
                name='name' 
                placeholder='insira o nome do projeto'
            />

            <Input
                type='number'
                placeholder='insira o orçamento total'
                name='budget'
                text='orçamento do projeto $'
            />
            
           
                
            <Select name='category_id' text='selecione a categoria' />

            <SubmitButton text={btnText}/>

            

          
        </form>

    )
}

export default ProjectForm