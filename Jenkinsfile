node {
    git branch: '${BRANCH_NAME}', credentialsId: 'githubProjekt', url: 'https://github.com/LSS-Manager/lss-manager-v3.git'

    def workspace = pwd()

    withSonarQubeEnv('Sonar') {
        sh '/var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/SonarqubeScanner/bin/sonar-scanner -Dproject.settings=sonar.properties -Dsonar.branch=${BRANCH_NAME} -Dsonar.projectBaseDir=${WORKSPACE} -Dsonar.login=${SONAR_AUTH_TOKEN}'
    }
}
