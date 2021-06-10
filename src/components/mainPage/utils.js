export function getTime(time){
    const hm = getHoursAndMinutes(time)
    let timeValue = ""
    if (hm.hours > 12){
        hm.hours = hm.hours - 12
        timeValue = hm.hours.toString()
        if (hm.minutes <= 0){
            timeValue = timeValue+ "pm"
        }else{
            timeValue = timeValue + ":" + hm.minutes.toString()+ "pm"
        }
    }else{
        timeValue = hm.hours.toString()
        if (hm.minutes <= 0){
            timeValue = timeValue+ "am"
        }else{
            timeValue = timeValue + ":" + hm.minutes.toString()+ "am"
        }
    }

    return timeValue
}

export function getHoursAndMinutes(time){
    const splitTime = time.split("T")
    const splitHours = splitTime[1].split(":")
    const hours = Number(splitHours[0])
    const minutes = Number(splitHours[1])

    return {
        hours: hours ? hours : 0,
        minutes: minutes ? minutes : 0
    }
}

export function getIsMeetingCompleted(time){
    const hm = getHoursAndMinutes(time)
    const currentHours = new Date().getHours()
    const currentMinutes = new Date().getMinutes()
    if ((currentHours === hm.hours) && (currentMinutes >= hm.minutes)){
        return true
    }
    if ((currentHours > hm.hours)){
        return true
    }
    return false
}

export function getMeetingsCount(meetingsData){

    let business = 0
    let personal = 0
    let completedMeetingsCount = 0
    for(let i=0;i<meetingsData.length;i++){
        if (meetingsData[i].type === "BUSINESS"){
            business = business +1
        }
        if (meetingsData[i].type === "PERSONAL"){
            personal = personal +1
        }
        if(getIsMeetingCompleted(meetingsData[i].time)){
            completedMeetingsCount = completedMeetingsCount + 1
        }
    }

    return {
        business: business,
        personal: personal,
        completedMeetingsCount: completedMeetingsCount
    }
}