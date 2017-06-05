(function ($){
    // remove lss buttons
    var missionDiv,
        missionListDiv,
        scriptMissionTab,
        missionList,
        scriptTabContent,
        missionListKrankentransporteDiv,
        missionListKrankentransporte,
        missionListAllianceDiv,
        missionListAlliance,
        missionListEventsDiv,
        missionListEvents,
        missionListSicherheitswacheDiv,
        missionListSicherheitswache;

    missionDiv = $('#missions');
    missionDiv.find('.btn-group:eq(0)').hide();

    // create divs
    missionListDiv = $('#mission_list');
    missionListDiv.before('<div id="scriptMissionTab"></div>');
    scriptMissionTab = $('#scriptMissionTab');

    missionDiv.find('strong:eq(0)').append(
      '<div id="scriptMissionMenu">' +
        '<ul class="nav nav-tabs small" style="padding-left:0">' +
          '<li class="active"><a href="#scriptEmergencies" data-toggle="tab">'+
            '<img class="icon icons8-Siren-Filled" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADcElEQVRoQ+2Z/XETMRDF91WAUwFQAaQCoAJIBSQVABUQKoBUgFNBQgVABSQVQCogqeAxz0ge5aw7Sau7GYax/rFnrK/frvbtSoY5Gsm1mb00s0MAvxxT7AwhuTKzn2Z2DuBt65xoHaD+AeR1WPTYM8dwDMlTM3vvndML8ihYT/t53OuVxBvyims+F8jcXun1hvbTAzKLV+bwRhfIwCsnACQAzY2kYuyzNzbigm6PBBCd6WMAn5oJkgEkpVJrALfeebpAvIsuMW4PsoRVe+b8fzxCUmWB2imAc49VSD43szdmpk8JQE27MrNLMzvzBjlJVReqCFYgqQmfhJVVN1UDhRwg6XxVs/ORPlIqrXlWO0cCoFymdrM5WkHLRfYwAToCIMhsCxBfzeypmd2ZmSRYElpVRAYvKofIqmoaezIFQ1JrXZjZFiAYYX0vRgZAk0mOpDau43Qtj9QCDDeaJET9JOPpuI0ZLybPmwgQO2aDXdYC8G1iwrQ8USk/6rma45LA3AI4KHgluzeXaiXe0N1hrjJehntmZq5yxwvyI8TGiynP1Xgj9gllykdvzeUFoTYAwDU+BxiCX+LxHYBkvKk1b4RkjI87ALU5o7ipoIK/zawYJ7nJPCCylttyhUB2e9oDEiXwC4CeRLjDlCTnZiX0gMRHgg8A9H22RjIqV7OIeECUsPQU5JLJwtFyG8kD4rZayXXJI0Sztz0gUhb3s00pa3uFZAck6LkybLa8JulWlgqPREW8AnCYqctkQD3iSWjulVBbkACgTjEZ7cRAkrSuAagSnb1NGWpQYApER3ADpPuINp4CbErynCL1Zt8aapK6nzwws4PchSvEkV5d1EftL1C0QHKnEET2WSYJRh275ofmSpCimIQqQOtvgQSie4U2PgqQFHbxDtKsKjUQ6kOyWt4ToFWTavUkrAYQVy5pBZm9fM8ok6sEagVZTHqT4+sqSqtBlirfMx6J14Smcr4FxGWp2thI+3mSbguI6+w6QeJbW3UV3ALiUhMnSDGXDOdtAdEfOXpMe9f7f0gJLnmlqc5XLSDNVipteOx3TwXRArJY+Z5RrmZhGQUhGZOf17BLjLsEcJSbeApkk/z+tTb2llYEmfMRrscopdyyB+mxrmfs3iMlC3is2jOmtJ9ijPQsvsRYj2rFTL7Efrxzjr43/wE/Kgjg5EADGQAAAABJRU5ErkJggg==" width="15" height="15">'+
            ' (<span id="scriptEmergencyCounter"></span>)'+
          '</a></li>' +
          '<li><a href="#scriptTransports" data-toggle="tab">'+
            '<img class="icon icons8-Ambulance" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAC/UlEQVR4Xu2b7VUVMRCGZypQK0AqECsQKhArUCpAKsAOwArECsAOoALsQKgAOhjPe84sZ2/YbCab5N7dbPL3ZjOZJ28yk4/LtPLCK/efGoCmgJUTaFNgDgIQkfdEdEFEB9qfv0R0xswPpfu3cwWo8/dE9NZx9pmIPpaGMAcAN0T02TPSf5j5uKQK5gDgaWD0O58fmHm/dgAy5iAzFx2koo1bRk5E5gEg1BGLMzusc8LMV1Psvyhg4QAQMY6YGeEzqtQCAE5PCps1AQAEKABKAAxT8QIovfqaeheoJCI/iOjcqXbLzEfW9hcNAE6KCBa/r47DV8x8YoGweAAKAdL/4DiMvcRlCEItALCPuB2AEAyPVQBQFWAnCQhveqMeDI/VAOhBwM6yX0bD49YBuAlX7mgjIt+I6JcDwRseqwOgSjCHxyoBxITHagFYw2PtAILhsWoAI+GRusW3GIDU7XXO6CAiyBE2wuOqAKgSNk6eGgA9a1zFFNiJAny7sNKZYKzdYgqI7Uho25r6uw98A9CR3ZY0t2XHVUxTgHMBUzwMtjUgddXK/P1spkBmv8zNZQOgDxpOiQj39njZgYKXHLjn/1n6QcNU+1kAiAiesXwPYL9k5jPz0ERUTLGfDEBEcM6G8zZLMV9MWBrTVDbJfhIAEcEFA2QfUzAdQmoxtZfD/mQAOuf+OT191KmAc3iUQyICpD2n3n7qmpDLfgoAd/Th/IF7AysiOH7C8XMfQrIKBkZ/kv1oACPa/MLMWPFfFRFBZLg26Xp6pSz2g5ngSP/e+e7fPXKd7urwl1nsNwChE6HVTQGfwwOLELI+PGHdeIaiiyBOXrvsEE2WWASz2g++E/TMa3QCMf5OwX3SMNh3Hj+VCoPZ7AcBaBa2+ETIp3ATAIUw9BbH1+5vZramzaYo4XkLlGzfDCBCCcnzPmI9GqoaZT8KgELAPMf8R9LTZX3IzpAcYSdY9E8OuiZlsx8NwKTXBVVqABY0WEW62hRQBOuCGm0KWNBgFenq6hXwH/kYT1/4UtMbAAAAAElFTkSuQmCC" width="15" height="15">'+
            ' (<span id="scriptTransportCounter"></span>)'+
          '</a></li>' +
          '<li><a href="#scriptAlliances" data-toggle="tab">'+
            '<img class="icon icons8-Sell" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADz0lEQVRoQ+2a7VEUQRCGuyPQDIQIJAM1AjECIQIxAjUCIQIhAy4CIQIhAiECMYK2nq2eq7m92Z3euzmPHztVV1fAbE+//fbX9KISXGb2VkR+iMhB8JHW2x5E5FRVb0qCNXqamf3eI4ik5oOqHm4LxBCgqmHwUSNF9pnZ6PlhpWqCIspss6d2fnMgZvbSY+k4qPi1+/7T2P59APkpIiSGKWuhqqPA9wGk82UROVRVMs3gMjMyIEmkGnv7AEJ6fDOFDhF5lowQI5ci8j4IZiEiJ6r6vGIkqPzkbf/dtSZrGHxgBtI3VM0iQcNuvK12fvOCuLGmlQdnILNr7ci3ZteaXWt2rXELzDFSiBG60xc78pyo2EdVLU5xplR2bn2056+ipzbe9+jt/nbjoMZKNRcXZqT5yY0FzkAaG3RrcVVGfE7F/ZtxzVFvbHonInxuVPVqE218pvzJ5SKfYP42NOMdOmMQiI9qvjgABgq1RXpmyMzArbrMDKW/j8zATvxssmUaaHweGlKsAXELASAfst166r1TVRjoloNlH4emEdClqp4OIXGGYeCr7/krIucico1sMxsbJzFx4Tk8BEMwN7tgfrYEYmYffVMqOBxA3TivDdocFGB47cAqgim8mrjgTKxcGLViPACmuvFnhOYPWgBA4UEAyozOmvqCzSwHgwIYYVFQ8t6LW8eumRF/GAEXwoDMuToXLTyLfvyNz5mzcwuQNOJkA9aBhY2Xg8EQeTuDQVKcXakqgEtKwgIgulFrASD6ITu5NjI7pgACqqdtAeTI3Yooy+d1wCqwsFRywM2WADMgsMgZi2r6DSgxusWVIiEQnCkD9cHB2DsP9r6brbCQMUnGAwRGONo5kDGUnoLxCBINMUXM8DNrxc0yFvJ3mYA4pubsFUimXIpTfrXiZr14oCwkoCsJowkQM/vllTlZlW/uDrX3I7gbbOTKYeGV5wppm8qf6lCHtRUQXCIS1GOetqacx9cgC7mwJkA8AFMwp36M79qNkpQPewT0ZBY2AuKBiWL3UwvllMw3hYVJQAqVn+cpmrjCaAxMAeCs9v+7Ys3dhmTWul8KTmoeyRLk+/z9YBNAm7JQZcTbDApO6n3OUuX3jpeMQbZJi5/pQif1Zs4CBZCzUrMaZiEChIaMVnnwRWUBECDog0KABtoQDLa8JkxxzaJr+SEHEaGeBACQXK4KyMzSfSQxvtaGTAHRrI5kgYqL5YCIIS5MtBt0s6n4kZpZMA4LWyeNZnWk1wvlgErGpX4AIHQtjrDTHEgGCKvTnfKdWIIZGFreKSJKRvb8A3bBPSGKFTO6AAAAAElFTkSuQmCC" width="15" height="15">'+
            ' (<span id="scriptAllianceCounter"></span>'+
          ')</a></li>' +
          '<li><a href="#scriptEvents" data-toggle="tab">'+
            '<img class="icon icons8-Event-Accepted" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAD4UlEQVRoQ+1Zi1EUQRB9HYESgRqBRwQSgkQgRCBEIEQgRqBEIEQgRCBE4BGBGMGz3tq9zs3tsXO7c7cFxVRR5bm7vf368/qzhidy7IngQBEQknsAvgJ4DWAO4NDMrsYYobbMUiC/HEToPjezNyOBVJVZCoRS2syMZPvvkUCqymyBZK7u1DEFMgZE+myBzKJQToHkrl7SteCla+MrlNkbyimQlSGThtO2Q6v0faVA7gG8SMx9Z2ZisMGHZJHM2kBEv98AvAJwB+CgEv32yqwKZLDZKzz4DKSCETciQuz2kOClZN+IFhWErg2k74EKOq0l4jlHnj2SBAzJl95kquiNOpOGFskjB3I2CgWAqYH8dCC7jxYIyRmABgiAXTO7GQNmMo+QVP/0wZU/N7ODxwrkN4Am2QHcm9nOowNCUtbXkuLWlX/riwp5adDZWGh5Dpwk84la/Pwc+n8IVH5i+/IHwElfDm0MiLRyMFIoHbZCYSkYQ5fCrOvonr0+EP6uomVH0YTYpYkXPYFR+KjwHZtZZwh5yH323FHYCURRsdyoR1JgGUspVE6z658UQkNZbGtA3P2q5LK4zk5Y270W4SWPrV3ptw3kPYDvYiszm5HUby30LkiqICr89vV7XeraNhBZ+iOAL76gaIAAkOJaVjTXzKzpwR46JFVMxYTqEPQXR/l3YWaXXc8PTvYsD9SSpC8VK+mkrHZjZit7L/eiwrNvzaTNo8J0wbujgZDUi7WljHOtdZH/kBXfJdfa/MkMIQDhLXlQHr4Kena6l5d0j1ZSOmdmdhxyagCJai4vaN+1YCm3tADJO/ocsUDRJCMspVMvIfiIEMTShmsNIFJMvZVAdNYGZy/dp96rbSIdpEhCp7hTzjrshkRqAJmVVGhpKgXSe0nG4rzXE/68DKZiKjYMym8W3KOBPMxBq68mDWbxHpnkD2e0UzM7IanEV84cTgkk5pZSb6gBVVgqF+XZeeKV8ymBBGX35kai8EKzmeTKzZRAlrpakurLLrM8ClZUnHax3j85EcWlrcDQnMify9+XMFjbSbvFlRdK8s4QbOUkQPIPL7V07pPThJZTtGpKzPuqRyqCAtE5+yehdZt/DI0PL30vr3l9wdLOZgIU7c21mXVNoaLzoOD/yV5TsxJZCf0ufeh0S0cHsHIIS+rQftF39hLFhtyT1IGl+O9buybeaOrQ1EBijqnXogyxaI1nslH5yMw006w8JDXbxKS53DTWUGqojAyM2g4pqiRv1q2eMxoHlNwxrywMapOGVgrc64gAxLyxyi6aV+S57sFqqDVrP+dsJrrVX4DSCkne0ajbOff/BWtayMaN4VNfAAAAAElFTkSuQmCC" width="15" height="15">'+
            ' (<span id="scriptEventsCounter"></span>)'+
          '</a></li>' +
          '<li><a href="#scriptSw" data-toggle="tab">'+
            '<img class="icon icons8-Clock-Filled" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAE8klEQVRoQ8Waj5EVNwzGpQoSKkioIFBBuAqSVBCoAKggUEG4CgIVBCoIV0GggkAFQAVifjvy4bdr+d/uTjxzM+/d83r1WZ8+y7JVDm5m9r2I/CQi90SEz/zxmfZORD77H5/fqyrfD2t6xEhmhsG/i8iDzPjeoQH2VkReqSqfd7VpQO6JX0TkmYj8uMuKbw9/8PHezHpuCpCZPfYXQ6czGjR8pqrXo4MPAXJq/TVBq1G7Un8o+GiEit2A3CsvZi3b+dyTXm91ATIzvPKw06g3rmYEOjP8WkR+9mdvfBxiLgkIcdjTXqrqo1bHKiAP/H86KPZeRPDe63Uwm9lLV0BsQckuJsbfwf/4Q+5rjQm6qglGC9C/DTAfRQQ64IVi87h74j++qMWDmQGKifmuguqdqt6Pfg8BddDsOS+fldfKBKCcLAUoadRC+hUBmRkz+mcw2hf3ClQ6rbm3iN2oPVXVjUhtADlFoFqpAebBiIyaGQKQxruvqiyeXc1tQVwiCjLeRXZRAlSLm80ALcvMDPr84f2eqyrfu1tjgjfxdAGoQTUWuGGa7QUE8gb9Lqh3C8jl8z/PjtczeK2qSam6Z9eN2eWh9DIzI15KQkGadDeJUw4IySwFIdJ8b1bNVoYMUy4DhPoRf6V4umVPDgjvlLLmKaplhhDUKVOY9nSDeh9U9S59FkCVwGMDljZnQ1QLAN2oKinPdDMzVK2UUSyClQBF/Cxq/Yg1ZpZ76AhA0Rq5eD8BiqT6zmzsnOghYulTYVIXCVdXt1IHdo2/jnij1NfM8tjc7SEPEXLHUpZ+B0Bwmox63aYVKR/IzCz7fhSgfCnIX3cFoIiTpOnwf1dbAapmyr0vMjOY83eh/1MARWhZrLrzroBupdh8q6pXvcYH47K8QOUtqyorMN4BEOoxXF6qTBRGTKmnLy/khQhDSf6v8VAuq6UJ2ewye2a3Me5ULHXYevN/ASL/IkaHPN8LKFpUKWhAueq2OfJWI3PnsWFQrsiIGJRL6VRuwkK5M0UhSlOSEc2ix4wonC3bjI/Mokw/lFb4ViVn/Uxl7Vxk+9SFNRnjGQkCVEosKX/91iM29KmwallYo9zokNRnlTXwLna9pbSlq5DogOLUxztEXN+dnAYxkBcf8y7N9anigGWrc/r2oaKCkRhVN5QV9bzYPrCJK5WuDsm9KqCibX9YXTKzaKvzbYPntGPNKanQri14K9CD8m8xk6hUfz6q6lI+6CmSXFRVWgbO/F4oKG62Lo2qVLFIUquq7Cpu9IB0UMQVNN8UIytJ9BdVvT1JPL3Q2AOm1Weq0JgtgLV0ZbgU3DK29XujFLypSo0W64cTypbBtd8dDOWB6HC6Xax3xasdp9DlVOVzGyJJT3PQd5ySUS9azVMXth2o0aE3QVzN2JXWaunhprN1JNlK/wHDkeSryuLJop0fp4SbOjPjNgoTVbv/UK3mtgAxcJQh5xgwEo8ycxce6zw0BggUa5WdOZzmwC1kRe+xfot+OTgy4XR/h5MLnl0f65ORpGP93mJmV22jC1CnUOwRtNazzSw8DdANyEFBCWa8dZ+gZWDv71Ds4UgxZQhQpoAoEOlJ7T5Br9GlfhxOc3lp+CrOFCD3FoIB/wFWytJnABFzjLe5kdI72DSg/AW+oqNSBPooHaEVSsoWfKhOVwJ5CKAVuHQls+eKJpn1oQvzV++Yjk+9aieJAAAAAElFTkSuQmCC" width="15" height="15">'+
            ' (<span id="scriptSWCounter"></span>)'+
          '</a></li>'+
        '</ul>'+
      '</div>'
    );
    scriptMissionTab.append('<div class="tab-content" id="scriptTabContent"></div>');

    missionList = missionListDiv.html();
    missionListDiv.remove();

    scriptTabContent = $('#scriptTabContent');
    scriptTabContent.append('<div class="tab-pane active" id="scriptEmergencies"><div id="mission_list"' +
        ' style="padding-left:0">' + missionList + '</div></div>');

    missionListKrankentransporteDiv = $('#mission_list_krankentransporte');
    missionListKrankentransporte = missionListKrankentransporteDiv.html();
    missionListKrankentransporteDiv.remove();
    scriptTabContent.append('<div class="tab-pane" id="scriptTransports"><div id="mission_list_krankentransporte"' +
        ' style="padding-left:0">' + missionListKrankentransporte + '</div></div>');

    missionListAllianceDiv = $('#mission_list_alliance');
    missionListAlliance = missionListAllianceDiv.html();
    missionListAllianceDiv.remove();
    scriptTabContent.append('<div class="tab-pane" id="scriptAlliances"><div id="mission_list_alliance"' +
        ' style="padding-left:0">' + missionListAlliance + '</div></div>');

    missionListEventsDiv = $('#mission_list_alliance_event');
    missionListEvents = missionListEventsDiv.html();
    missionListEventsDiv.remove();
    scriptTabContent.append('<div class="tab-pane" id="scriptEvents"><div id="mission_list_alliance_event"' +
        ' style="padding-left:0">' + missionListEvents + '</div></div>');

    missionListSicherheitswacheDiv = $('#mission_list_sicherheitswache');
    missionListSicherheitswache = missionListSicherheitswacheDiv.html();
    missionListSicherheitswacheDiv.remove();
    scriptTabContent.append('<div class="tab-pane" id="scriptSw"><div id="mission_list_sicherheitswache"' +
        ' style="padding-left:0">' + missionListSicherheitswache + '</div></div>');

})($);
