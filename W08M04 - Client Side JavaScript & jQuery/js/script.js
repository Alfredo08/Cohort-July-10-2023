let $registryFrom = $('form');

$registryFrom.on('submit', (event) => {
    event.preventDefault();
    let $fullName = $('#fullName').val();
    let $email = $('#email').val();
    let $password = $('#password').val();
    let $passwordConfirmation = $('#passwordConfirmation').val();

    let $passwordError = $('#passwordConfErrorMessage');
    if($password !== $passwordConfirmation){
       $($passwordError).text("Your passwords do not match!");
    }
    else{
        $($passwordError).text("");
    }

    let $country = $('#country').val();

    let $gender = $('.gender:checked').val();

    $('.information').append(`
                            <div>
                                <h3> Full name: ${$fullName} </h3>
                                <p> Email: ${$email} </p>
                                <p> Password: ${$password} </p>
                                <p> Country: ${$country} </p>
                                <p> Gender: ${$gender} </p>
                            </div>
                          `);
    
    $('#fullName').val("");
    $('#email').val("");
    $('#password').val("");
    $('#passwordConfirmation').val("");
    $('#country').val("0");
    $('.gender').prop('checked', false);
});

/*
let registryForm = document.querySelector('form');

registryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let fullName = document.querySelector('#fullName').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let passwordConfirmation = document.querySelector('#passwordConfirmation').value;

    let passwordError = document.querySelector('#passwordConfErrorMessage')
    if(password !== passwordConfirmation){
        passwordError.innerText = "Your passwords do not match!";
    }
    else{
        passwordError.innerText = "";
    }

    let country = document.querySelector('#country').value;
    let gender;

    let genderInputs = document.querySelectorAll('.gender');
    for(let i = 0; i < genderInputs.length; i ++){
        if(genderInputs[i].checked){
            gender = genderInputs[i].value;
        }
    }

    let informationContainer = document.querySelector('.information');
    informationContainer.innerHTML = `
                                    <div>
                                        <h3> Full name: ${fullName} </h3>
                                        <p> Email: ${email} </p>
                                        <p> Password: ${password} </p>
                                        <p> Country: ${country} </p>
                                        <p> Gender: ${gender} </p>
                                    </div>
                                    `;
    
    console.log(fullName, email, password, country, gender);
}); 

*/