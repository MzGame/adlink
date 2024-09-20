// Generate a simple random token
function generateToken() {
    return Math.random().toString(36).substr(2, 10);
}

// Simulated token verification system
let token = null;
let isTokenUsed = false;

document.getElementById('adlinkBtn').addEventListener('click', function() {
    // Simulate adlink completion by redirecting to the ad
    alert('You are being redirected to an adlink...');
    
    // Simulate coming back from adlink
    setTimeout(function() {
        token = generateToken();  // Generate token when returning from adlink
        document.getElementById('token').textContent = token;
        document.getElementById('tokenDiv').classList.remove('hidden');
    }, 2000); // Simulate 2 seconds delay
});

document.getElementById('verifyBtn').addEventListener('click', function() {
    // Simulate token verification
    if (!isTokenUsed && token) {
        document.getElementById('verificationMessage').textContent = 'Token is valid!';
        isTokenUsed = true;  // Mark token as used
    } else {
        document.getElementById('verificationMessage').textContent = 'Token is invalid or already used.';
    }
    document.getElementById('verificationMessage').classList.remove('hidden');
});
