(function (I18, $) {

    const LSS_STATUSCOUNT_STORAGE = "LSS_STATUSCOUNT_STORAGE";
    const status_list = [1, 2, 3, 4, 5, 6, 7, 9];

    I18n.translations.de.lssm.statuscount = {
        name: "Status-Zähler",
        settings: {
            show: "Ein-/Ausblenden",
            status: {
                show: {
                    label: "Anzeigen",
                    description: "Soll der Status überhaupt angezeigt werden? Wichtig: Diese Einstellung hat höhere Priorität als andere Einstellungen, d.h. dass wenn diese Einstellung ausgeschalten ist, der Status nie angezeigt wird."
                },
                hide: {
                    label: "Nur bei Bedarf einblenden",
                    description: "Der Zähler wird nur angezeigt, wenn mindestens ein Fahrzeug in diesem Status ist. (Achtung: Ist der Zähler jedoch komplett ausgeblendet, wird er trotz eines Aktivierens dieser Einstellung nie eingeblendet!)"
                },
                percent: {
                    label: "Prozentzahlen anzeigen",
                    description: "Soll der prozentuale Anteil dieses Status angezeigt werden?"
                }
            },
            round: {
                label: "Prozentzahlen runden",
                description: "Auf wie viele Nachkommastellen sollen die Prozentzahlen (falls angezeigt) gerundet werden?"
            }
        }
    };
    I18n.translations.en.lssm.statuscount = {
        name: "Status-Count",
        settings: {
            show: "Show/Hide",
            status: {
                show: {
                    label: "Show",
                    description: "Should the status be displayed at all? Important: This setting has a higher priority than other settings, i.e. if this setting is switched off, the status will never be displayed."
                },
                hide: {
                    label: "Show only on demand",
                    description: "The counter is only displayed if at least one vehicle is in this status. (Attention: If the counter is completely hidden, it will never be shown, even if this setting is activated!)"
                },
                percent: {
                    label: "Show percentages",
                    description: "Should the percentage of this status be displayed?"
                }
            },
            round: {
                label: "Round percentages",
                description: "How many decimal places should the percentages (if displayed) be rounded to?"
            }
        }
    };
    I18n.translations.es.lssm.statuscount = {
        name: "Cuenta de status",
        settings: {
            show: "Visualizar/Ocultar",
            status: {
                show: {
                    label: "Mostrar",
                    description: "¿Debería visualizarse el status? Importante: este ajuste tiene mayor prioridad que otros, es decir, si está desactivado, nunca se mostrará el estado."
                },
                hide: {
                    label: "Mostrar sólo bajo demanda",
                    description: "El contador sólo se muestra si al menos un vehículo se encuentra en este estado. (Atención: Si el contador está completamente oculto, nunca se mostrará, incluso si esta opción está activada!)"
                },
                percent: {
                    label: "Mostrar porcentajes",
                    description: "¿Debe visualizarse el porcentaje de este status?"
                }
            },
            round: {
                label: "Porcentajes redondos",
                description: "¿A cuántos decimales deben redondearse los porcentajes (si se visualizan)?"
            }
        }
    };
    I18n.translations.pl_PL.lssm.statuscount = {
        name: "Status-liczba",
        settings: {
            show: "Pokaż/Ukryj się",
            status: {
                show: {
                    label: "Pokaż",
                    description: "Czy status powinien być w ogóle wyświetlany? Ważne: To ustawienie ma wyższy priorytet niż inne ustawienia, tzn. jeśli to ustawienie jest wyłączone, status nigdy nie będzie wyświetlany."
                },
                hide: {
                    label: "Pokaż tylko na żądanie",
                    description: "Licznik jest wyświetlany tylko wtedy, gdy przynajmniej jeden pojazd znajduje się w tym stanie. (Uwaga: Jeśli licznik jest całkowicie ukryty, nigdy nie zostanie wyświetlony, nawet jeśli to ustawienie jest aktywne!)"
                },
                percent: {
                    label: "Pokaż procenty",
                    description: "Czy powinien być wyświetlany procent tego statusu?"
                }
            },
            round: {
                label: "Okrągłe wartości procentowe",
                description: "Do ilu miejsc po przecinku należy zaokrąglić wartości procentowe (jeśli są wyświetlane)?"
            }
        }
    };
    I18n.translations.sv_SE.lssm.statuscount = {
        name: "Status-Count",
        settings: {
            show: "Visa gömma",
            status: {
                show: {
                    label: "visa",
                    description: "Bör statusen visas alls? Viktigt: Den här inställningen har högre prioritet än andra inställningar, dvs om denna inställning är avstängd, kommer status aldrig att visas."
                },
                hide: {
                    label: "Visa endast på begäran",
                    description: "Räknaren visas endast om minst ett fordon är i denna status. (Observera: Om räknaren är helt dold, kommer den aldrig att visas, även om den här inställningen är aktiverad!)"
                },
                percent: {
                    label: "Visa procentsatser",
                    description: "Bör andelen av denna status visas?"
                }
            },
            round: {
                label: "Runda procentsatser",
                description: "Hur många decimaler ska procentsatserna (om de visas) avrundas till?"
            }
        }
    };
    I18n.translations.da_DK.lssm.statuscount = {
        name: "Status-antal",
        settings: {
            show: "Vis / Skjul",
            status: {
                show: {
                    label: "At vise",
                    description: "Skal status overhovedet vises? Vigtigt: Denne indstilling har en højere prioritet end andre indstillinger, dvs. hvis denne indstilling er slået fra, vises status aldrig."
                },
                hide: {
                    label: "Vis kun efter behov",
                    description: "Tælleren vises kun, hvis mindst et køretøj er i denne status. (Bemærk: Hvis tælleren er helt skjult, vises den aldrig, selvom denne indstilling er aktiveret!)"
                },
                percent: {
                    label: "Vis procenter",
                    description: "Skal procentdelen af denne status vises?"
                }
            },
            round: {
                label: "Runde procenter",
                description: "Hvor mange decimaler skal procentdelene (hvis vist) afrundes til?"
            }
        }
    };
    I18n.translations.nb_NO.lssm.statuscount = {
        name: "Status-Count",
        settings: {
            show: "Vis skjul",
            status: {
                show: {
                    label: "Forestilling",
                    description: "Bør status vises i det hele tatt? Viktig: Denne innstillingen har høyere prioritet enn andre innstillinger, dvs. hvis denne innstillingen er slått av, vil statusen aldri vises."
                },
                hide: {
                    label: "Vis bare på forespørsel",
                    description: "Telleren vises bare hvis minst ett kjøretøy er i denne statusen. (Oppmerksomhet: Hvis telleren er helt skjult, vil den aldri vises, selv om denne innstillingen er aktivert!)"
                },
                percent: {
                    label: "Vis prosenter",
                    description: "Bør prosentandelen av denne statusen vises?"
                }
            },
            round: {
                label: "Runde prosenter",
                description: "Hvor mange desimaler skal prosentene (hvis vist) rundes til?"
            }
        }
    };
    I18n.translations.it_IT.lssm.statuscount = {
        name: "Stato - Conto",
        settings: {
            show: "Mostra/Nascondi",
            status: {
                show: {
                    label: "Mostra",
                    description: "Lo stato dovrebbe essere visualizzato? Importante: questa impostazione ha una priorità maggiore rispetto ad altre impostazioni, cioè se questa impostazione è disattivata, lo stato non verrà mai visualizzato."
                },
                hide: {
                    label: "Mostra solo su richiesta",
                    description: "Il contatore viene visualizzato solo se almeno un veicolo si trova in questo stato. (Attenzione: Se il contatore è completamente nascosto, non viene mai visualizzato, anche se questa impostazione è attivata!)"
                },
                percent: {
                    label: "Mostra percentuali",
                    description: "Dovrebbe essere visualizzata la percentuale di questo stato?"
                }
            },
            round: {
                label: "Percentuali rotonde",
                description: "A quante cifre decimali devono essere arrotondate le percentuali (se visualizzate)?"
            }
        }
    };
    I18n.translations.fr_FR.lssm.statuscount = {
        name: "Nombre de statuts",
        settings: {
            show: "Afficher/Masquer",
            status: {
                show: {
                    label: "Montrer",
                    description: "Le statut doit-il être affiché ? Important : Ce réglage a une priorité plus élevée que les autres réglages, c'est-à-dire que si ce réglage est désactivé, l'état ne sera jamais affiché."
                },
                hide: {
                    label: "Montrer seulement sur demande",
                    description: "Le compteur n'est affiché que si au moins un véhicule se trouve dans ce statut. (Attention : Si le compteur est complètement masqué, il ne sera jamais affiché, même si ce paramètre est activé !)"
                },
                percent: {
                    label: "Afficher les pourcentages",
                    description: "Le pourcentage de ce statut doit-il être affiché ?"
                }
            },
            round: {
                label: "Pourcentages arrondis",
                description: "À combien de décimales les pourcentages (s'ils sont affichés) doivent-ils être arrondis ?"
            }
        }
    };
    I18n.translations.ru_RU.lssm.statuscount = {
        name: "Статус-счет",
        settings: {
            show: "Показать/скрыть",
            status: {
                show: {
                    label: "Показать",
                    description: "Должен ли вообще отображаться статус? Важно: Этот параметр имеет более высокий приоритет, чем другие параметры, т.е. если этот параметр выключен, состояние никогда не будет отображаться."
                },
                hide: {
                    label: "Показать только по требованию",
                    description: "Счетчик отображается только в том случае, если хотя бы одно транспортное средство находится в этом состоянии. (Внимание: Если счетчик полностью скрыт, он никогда не будет отображаться, даже если эта настройка включена!)"
                },
                percent: {
                    label: "Показать проценты",
                    description: "Должен ли отображаться процент от этого состояния?"
                }
            },
            round: {
                label: "Процентные доли округления",
                description: "Сколько знаков после запятой должно округляться до процентного соотношения (если отображаются)?"
            }
        }
    };
    I18n.translations.nl.lssm.statuscount = {
        name: "Status-Teller",
        settings: {
            show: "Verberg/Toon",
            status: {
                show: {
                    label: "Toon",
                    description: "Moet de status überhaupt worden weergegeven? Belangrijk: Deze instelling heeft een hogere prioriteit dan andere instellingen, d.w.z. als deze instelling is uitgeschakeld, wordt de status nooit weergegeven."
                },
                hide: {
                    label: "Toon alleen op aanvraag",
                    description: "De teller wordt alleen weergegeven als ten minste één voertuig zich in deze status bevindt. (Opgelet: Als de teller volledig verborgen is, wordt hij nooit weergegeven, ook niet als deze instelling is geactiveerd!)"
                },
                percent: {
                    label: "Toon percentages",
                    description: "Moet het percentage van deze status worden weergegeven?"
                }
            },
            round: {
                label: "Afronden percentages",
                description: "Op hoeveel decimalen moeten de percentages (indien weergegeven) worden afgerond?"
            }
        }
    };



    let managedSettings = {
        "id": LSS_STATUSCOUNT_STORAGE,
        "title": I18n.t('lssm.statuscount.name'),
        "settings": {}
    };
    for (let status in status_list) {
        status = status_list[status];
        $.extend(managedSettings.settings, {
            [`StatusCountShowHideButtonS${status}`]: {
                name: `status${status}`,
                id: "renameFzVehicleShowHideButton",
                ui: {
                    label: `Status ${status} ${I18n.t('lssm.statuscount.settings.show')}`,
                    type: "button",
                    custom_function_event: "click",
                    custom_function: function () {
                        $(`[id^=${LSS_STATUSCOUNT_STORAGE}_s${status}_].lssm_setting_line`).toggle();
                    }
                }
            }
        });
    }
    $.extend(managedSettings.settings, {
        round: {
            default: 2,
            ui: {
                type: "number",
                min: 0,
                label: I18n.t('lssm.statuscount.settings.round.label'),
                description: I18n.t('lssm.statuscount.settings.round.description')
            }
        }
    });
    for (let status in status_list) {
        status = status_list[status];
        $.extend(managedSettings.settings,  {
            [`s${status}_show`]: {
                default: true,
                ui: {
                    type: "toggle",
                    label: `Status ${status}: ${I18n.t('lssm.statuscount.settings.status.show.label')}`,
                    description: I18n.t('lssm.statuscount.settings.status.show.description'),
                    hidden: true
                }
            },
            [`s${status}_hide`]: {
                default: false,
                ui: {
                    type: "toggle",
                    label: `Status ${status}: ${I18n.t('lssm.statuscount.settings.status.hide.label')}`,
                    description: I18n.t('lssm.statuscount.settings.status.hide.description'),
                    hidden: true
                }
            },
            [`s${status}_percent`]: {
                default: true,
                ui: {
                    type: "toggle",
                    label: `Status ${status}: ${I18n.t('lssm.statuscount.settings.status.percent.label')}`,
                    description: I18n.t('lssm.statuscount.settings.status.percent.description'),
                    hidden: true
                }
            }
        });
    }
    lssm.managedSettings.register(managedSettings);

    function getSetting(setting) {
        return lssm.managedSettings.getSetting(LSS_STATUSCOUNT_STORAGE, setting);
    }

    //temp settings
    const round = getSetting("round"); // Auf so viele Nachkommastellen werden die Prozente gerundet.

    const settings = {
        s1:  {
            "show": getSetting("s1_show"),     // Zähler wird eingeblendet bei true, bei false ausgeblendet (Wichtig: Überschreibt hide! => Wenn hide auf true aber show auf false ist, wird es trotzdem nie eingeblendet).
            "percent": getSetting("s1_percent"),  // Prozentsatz wird angezeigt bei true, bei false nicht.
            "hide": getSetting("s1_hide")      // Bei true wird der Zähler ausgeblendet, sollte er auf 0 stehen, bei false ist diese Funktion deaktiviert.
        },
        s2: {
            "show": getSetting("s2_show"),
            "percent": getSetting("s2_percent"),
            "hide": getSetting("s2_hide")
        },
        s3: {
            "show": getSetting("s3_show"),
            "percent": getSetting("s3_percent"),
            "hide": getSetting("s3_hide")
        },
        s4: {
            "show": getSetting("s4_show"),
            "percent": getSetting("s4_percent"),
            "hide": getSetting("s4_hide")
        },
        s5: {
            "show": getSetting("s5_show"),
            "percent": getSetting("s5_percent"),
            "hide": getSetting("s5_hide"),
            "blink": false     // Wenn dieser Wert auf false ist, blinkt der S5-Zähler nur, wenn mind. 1 Sprechwunsch vorhanden ist.
        },
        s6: {
            "show": getSetting("s6_show"),
            "percent": getSetting("s6_percent"),
            "hide": getSetting("s6_hide")
        },
        s7: {
            "show": getSetting("s7_show"),
            "percent": getSetting("s7_percent"),
            "hide": getSetting("s7_hide")
        },
        s9: {
            "show": getSetting("s9_show"),
            "percent": getSetting("s9_percent"),
            "hide": getSetting("s9_hide")
        }
    };

    let syncable = true;

    lssm.updateStatusCount(false);

    $("#radio_panel_heading")
        .append("<span id='statusCount'></span>")
        .click(() => {syncable = true})
        .click(sync)
        .click(update);

    update();

    $(document).bind(lssm.hook.postname("radioMessage"), update);

    function sync() {
        if (syncable) {
            lssm.updateStatusCount(false);
            syncable = false;
            window.setTimeout(function() {
                syncable = true;
            }, 5 * 60 * 1000);
        }
    }

    function update() {
        sync();
        let status = lssm.statusCount;
        status[5] = $('#radio_messages_important .building_list_fms_5:visible').length;
        let sum = Object.values(status).reduce((a, b) => a + b);
        const count_wrapper = $('#statusCount');
        count_wrapper.empty();
        for (let status_id in status_list) {
            status_id = status_list[status_id];
            let set = settings[`s${status_id}`];
            count_wrapper.append(
                set.show && ((set.hide && status[status_id] !== 0) || !set.hide) &&
                (set.text = `${(status[status_id] || 0).toLocaleString()}${set.percent ? ` (${(status[status_id] / (sum / 100)).toFixed(round)}%)` : ""}`) &&
                `<span class="building_list_fms building_list_fms_${status_id}" title="Status ${status_id}: ${set.text}">${set.text}</span>`
            );
        }
        $('#statusCount .building_list_fms_5')
            .css('background-image', (!settings["s5"].blink && status[5] === 0) ? 'url()' : 'url(/images/fms5_background.gif)')
            .click(function() {
                $('#building_panel_body .building_list_fms_5').parent().find('a').click();
            });

        $('.radio_message_close').click(update);

    }

})(I18n, jQuery);
