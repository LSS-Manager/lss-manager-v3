pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'GIT CLONE'
                // git branch: '${BRANCH_NAME}', credentialsId: 'LssmBotAuthKey', url: 'https://github.com/LSS-Manager/lss-manager-v3.git'
                checkout scm

                echo 'SONARQUBE'
                script {
                    def workspace = pwd()
                }

                withSonarQubeEnv('Sonar') {
                    withCredentials([string(credentialsId: 'LssmBotAuthKey', variable: 'TOKEN')]) {
                        sh '/var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/SonarqubeScanner/bin/sonar-scanner -Dproject.settings=sonar.properties -Dsonar.branch=${BRANCH_NAME} -Dsonar.projectBaseDir=${WORKSPACE} -Dsonar.login=${SONAR_AUTH_TOKEN} -Dsonar.github.oauth=${TOKEN} -X'
                    }
                }
            }
        }
    }
}
