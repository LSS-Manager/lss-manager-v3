node {
    git branch: '${BRANCH_NAME}', credentialsId: 'githubProjekt', url: 'https://github.com/LSS-Manager/lss-manager-v3.git'

    withSonarQubeEnv('Sonar') {
        sh '/var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/SonarqubeScanner/bin/sonar-scanner -Dproject.settings=sonar.properties -Dsonar.github.login=eaglefsd -Dsonar.branch=${BRANCH_NAME} -Dsonar.host.url=https://sonar.hassels.eu/ -Dsonar.projectBaseDir=/var/lib/jenkins/workspace/LSS-Manager -Dsonar.login=${SONAR_AUTH_TOKEN}'
    }
}
