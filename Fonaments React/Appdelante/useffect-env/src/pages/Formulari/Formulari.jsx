import { useNavigate } from "react-router-dom";
import styles from './Formulari.module.css';
import Form from '../../components/Form/Form';
import FormLocalStorageValue from "../../components/FormLocalStorage/FormLocalStorageValue";
import FormLocalStorageObj from "../../components/FormLocalStorage/FormLocalSorageObj";
import FormLocalStorageSubmit from '../../components/FormLocalStorage/FormLocalStorageSubmit'
import FormUseLocaltorage from '../../components/FormLocalStorage/FormUseLocalStorage'

const Formulari = () => {
  const navega = useNavigate();

  return (
    <div className={styles.formulari}>
      <button className={styles.button} onClick={() => navega(process.env.PUBLIC_URL)}>Tornar</button>
      <Form />
      <FormLocalStorageValue/>
      <FormLocalStorageObj />
      <FormLocalStorageSubmit />
      <FormUseLocaltorage />
    </div>
  );
};

export default Formulari;
