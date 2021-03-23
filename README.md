#To convert a PFX file to separate public and private key PEM files:

##Extracts the private key form a PFX to a PEM file:

openssl pkcs12 -in cert.pfx -nocerts -out key.pem

##Exports the certificate (includes the public key only):

openssl pkcs12 -in cert.pfx -clcerts -nokeys -out cert.pem


##Removes the password (paraphrase) from the extracted private key (optional):

openssl rsa -in key.pem -out cert.key
