document.getElementById("formId").addEventListener("submit", createData);
        function createData (){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/student_post', {
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    "st_id": document.getElementById("postid").value,
                    "st_name": document.querySelector('#postname').value,
                    "sensor_name": document.querySelector('#postsensor').value,
                    "sensor_type": document.querySelector('#posttype').value,
                    "sensor_unit": document.querySelector('#postunit').value,
                    "sensor_value": document.querySelector('#postvalue').value
                })
            })
           
            .then(response => console.log(response))
            .catch(err => console.log(err));
        }   