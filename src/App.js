import React,{ useState } from 'react';
import './App.css';

function App(){

	const [image, setImage] = useState("");
  	const [isUploaded, setIsUploaded] = useState(false);
  	const [typeFile, setTypeFile] = useState("");

	function handleImageChange(e) {
    	if (e.target.files && e.target.files[0]) {
      	   setTypeFile(e.target.files[0].type);
      	let reader = new FileReader();
      	reader.onload = function (e) {
        	setImage(e.target.result);
        	setIsUploaded(true);
     	 };
        reader.readAsDataURL(e.target.files[0]);
    	}
  	}

	const submitHandle = () => {
    	alert('Successful Submision')
		window.location.reload();
		};

	return (
		    <body className="body">
		    <div className="section">  
    		<form className="form" method="post">
      			<label className="l">Upload Document:</label><br/>
				<input type="file" id="fileItem" name="ChooseFile" onChange={handleImageChange} className="text"/><br/>
				 <img id="uploadedImg" src={image} accept=".jpg,.jpeg,.png"/>
				<p className="parah">Image should of .jpg or .png format <br/>Image should not be more than 5 MB</p>
	  			<input type="checkbox" name="checkbox" id="checkbox" defaultChecked="true"/>
	 			<label for="checkbox" className="l1">I hereby declare that the information provided in this form is accurate and complete. I confirm <br/>that any information is found incorrect 
            		and/or incomplete that leads a violation of regulations <br/>may initiate legal actions, and I accept that i am the responsible party for any and
            		all charges, <br/>penalties and violations</label>
	  			<br/><br/>

	  			<input type="button" value="Submit" className="submit" onClick={submitHandle} />
	  			<p className="parah">choose file before submitting</p>
    		</form>
		</div>
		</body>);
}
export default App;