document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;
  
    // user new object
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address,
      password: password
    };
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    users.push(user);
  
    localStorage.setItem('users', JSON.stringify(users));
  
    document.getElementById('registerForm').reset();
  
    alert('Registration successful!');
    console.log("success");
    window.location.href='login.html'
  });
  