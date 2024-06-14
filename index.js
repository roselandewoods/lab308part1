let counter = 0;

function ijoy() {
    counter++; 
  ijoy();  
}

try {
    ijoy(); 
} catch (error) {

    console.log(counter)
}