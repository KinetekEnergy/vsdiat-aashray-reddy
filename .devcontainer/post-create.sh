sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get dos2unix -y

npm install

dos2unix .devcontainer/post-create.sh
dos2unix .devcontainer/post-attatch.sh