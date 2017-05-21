var ScriptAPI;
(function () {
    ScriptAPI = {
        /*scripts welche auf dem Server hinterlegt sind*/
        scripts: {
            "name": {
                name: 'nameScript', /*Name des Scripts*/
                version: 0, /*Version des Scripts*/
                scripter: 'Mausmajor', /*Scripter*/
                forumThread: '', /*ForumsURL*/
                freigabe: true /*freigabe von Sebastian */
            }
        },
        register: function (name, version, scripter, forumThread) {
            /*
             * Regstriert das Script
             * erwartet den Scriptnamen,Version des Scrpts, Name des Scripters, ForenLink
             * lifert true/false zur�ck
             * true: Script darf laufen
             * false: Script darf nicht laufen
             */
            var script;
            if (this.scripts[name]) {
                /*Bringt daten des Scripts auf den aktuelle Stand*/
                script = this.scripts[name];
                script.name = name;
                script.version = version;
                script.scripter = scripter;
                script.forumThread = forumThread;
            } else {
                /*soll script automatisch laufen oder auf freigabe warten?
                 * true: Script ist freigegeben
                 * false: Script nicht fregegeben*/
                var standart = false;
                /*legt das Script neu an*/
                this.scripts[name] = {'name': name, version: version, 'scripter': scripter, 'forumThread': forumThread, 'freigabe': standart};
                /*informiert den Server/Sebastian �ber das neue Script*/
                script = this.scripts[name];
                this.InfoSebastian(this.scripts[name]);
            }
            if (script.freigabe) {
                return true;
            } else {
                this.showMessage(script);
                throw "Script wurde von Sebastian deaktiviert";
            }
        },
        showMessage: function (s) {
            /*
             * Erzeugt eine Infomessage f�r den User
             * Link zum Forumsthreat wird mir angegeben
             */
            var msg = '<div class="alert alert-danger"><b>' + s.name + '</b> funktioniert leider nicht! Bitte Fehler an <a href="' + s.forumThread + '" target="_blank">' + s.scripter + '</a> melden</div>';
            $('.container-fluid:first').before(msg);
        },
        InfoSebastian: function (s) {
            /*schickt aktelles Script, welches wohl noch nicht von Sebastian aufgenommen wurde,
             * an Server
             * So kann Sebastian das Script automatisch aufnehemen
             */
            var data = JSON.stringify(s);
            console.log(data);
            //$.post('URL',data);
        }
    };
})();
