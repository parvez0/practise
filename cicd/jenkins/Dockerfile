FROM ubuntu
RUN apt update && apt install wget -y && apt install gnupg2 -y
RUN wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | apt-key add -
RUN echo deb https://pkg.jenkins.io/debian-stable binary/ | tee /etc/apt/sources.list.d/jenkins.list
RUN apt update && apt install jenkins -y
CMD systemctl start jenkins
