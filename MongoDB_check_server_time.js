db.getCollection('check').find(
    {
//          $and: 
//          [   
//             {servertime: new ISODate("2019-06-01 01:04:55.000Z")},
            servertime: {
                            "$gte": new ISODate("2019-08-01 15:00:00.000Z"),
                            "$lte": new ISODate("2019-08-31 18:59:59.000Z"),
//                             "$ne": false    
                          },
            checkstatus: {$ne:"testok"},
//             checkstatus: "testok_inactive",
//               extra: /Backupjob:/
//             checkstatus : "add",
//             description: /�berpr�fung des Dateisystemspeicherplatzes - /,
//             description: '�berpr�fung des Dateisystemspeicherplatzes - Backup',
//             description: /Anti-Virus-Aktualisierungs�berpr�fung - G Data Enterprise Client Engine/,
//             description: /Leistungs�berwachung - Festplatte/,
//             extra: /Insgesamt:/
//             description : /Ger�t: MAV Deinstallation/
//             description: {$not: /Engine A/}
//             Anti-Virus-Aktualisierungs�berpr�fung - G Data Enterprise Client Engine A/B
//             extra :{$not:/Backupjob:/}
//             description: /Kinect/
//             Skript�berpr�fung - Terra Backup
//             checkid:"28139343",
//             {description:{$not:/Anti/}},
//             deviceid:531212,
//             {deviceid:{"$gte":1035046}},
//                dsc247: {$nin:[1,2]}
//          ],
//         $not:
//             description:{$nin:[/Anti/]}
//             description:{$not:/Anti/}
    }
//     {
//         deviceid:1,
//         checkid:1,
//         checkstatus:1,
//         consecutiveFails:1,
//         servertime:1        
//     }    
)
.count()
//     .limit(50)
//     .sort({servertime: -1})
//     .sort({deviceid: 1})