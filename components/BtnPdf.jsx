import styles from '../styles/BtnPdf.module.scss'

const BtnPdf = () => {

	const onButtonClick = () => {
		fetch('curriculo.pdf').then(response => {
			response.blob().then(blob => {
				const fileURL = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'curriculo.pdf';
				alink.click();
			})
		})
	}
	return (
		<>
            <button onClick={onButtonClick} className={styles.btn__Curriculum}>
                Download CV
            </button>
		</>
	);
};

export default BtnPdf;
