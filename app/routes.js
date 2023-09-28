//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// DfE Groups
router.post('/dfe-group-answer', function(request, response) {

    var group = request.session.data['dfe-group']
    if (group == "Education and Skills Funding Agency (ESFA)"){
        response.redirect("/esfa-directorate")
    }
    else if (group == "Families"){
        response.redirect("/families-directorate")
    }
    else if (group == "Operations & Infrastructure"){
        response.redirect("/opandinf-directorate")
    }
    else if (group == "Regions"){
        response.redirect("/regions-directorate")
    }
    else if (group == "Schools"){
        response.redirect("/schools-directorate")
    }
    else if (group == "Skills"){
        response.redirect("/skills-directorate")
    }
    else if (group == "Strategy"){
        response.redirect("/strategy-directorate")
    }
})

// DfE task groups
router.post('/task-dfe-group-answer', function(request, response) {

    var group = request.session.data['dfe-group']
    if (group == "Education and Skills Funding Agency (ESFA)"){
        response.redirect("/task-esfa-service-list")
    }
    else if (group == "Families"){
        response.redirect("/task-families-service-list")
    }
    else if (group == "Operations & Infrastructure"){
        response.redirect("/task-opandinf-service-list")
    }
    else if (group == "Regions"){
        response.redirect("/task-regions-service-list")
    }
    else if (group == "Schools"){
        response.redirect("/task-schools-service-list")
    }
    else if (group == "Skills"){
        response.redirect("/task-skills-service-list")
    }
    else if (group == "Strategy"){
        response.redirect("/task-strategy-service-list")
    }
})

// ESFA directorate
router.post('/esfa-directorate-answer', function(request, response) {

    var directorate = request.session.data['esfa-directorate']
    if (directorate == "Not directorate specific"){
        response.redirect("/esfa-services")
    }
    else if (directorate == "Finance"){
        response.redirect("/esfa-finance-services")
    }
    else if (directorate == "Finance and Provider Market Oversight"){
        response.redirect("/esfa-fpmo-services")
    }
    else if (directorate == "Funding"){
        response.redirect("/esfa-funding-services")
    }
    else if (directorate == "Schools Financial Support and Oversight"){
        response.redirect("/esfa-sfso-services")
    }
})

// ESFA directorate
router.post('/task-esfa-directorate-answer', function(request, response) {

    var directorate = request.session.data['esfa-directorate']
    if (directorate == "Not directorate specific"){
        response.redirect("/esfa-service-list")
    }
    else if (directorate == "Finance"){
        response.redirect("/task-esfa-finance-services")
    }
    else if (directorate == "Finance and Provider Market Oversight"){
        response.redirect("/esfa-fpmo-service-list")
    }
    else if (directorate == "Funding"){
        response.redirect("/esfa-funding-service-list")
    }
    else if (directorate == "Schools Financial Support and Oversight"){
        response.redirect("/esfa-sfso-service-list")
    }
})

// ESFA services
router.post('/task-esfa-services-answer', function(request, response) {

    var service = request.session.data['task-esfa-finance-services']
    if (service == "Academies Accounts Direction"){
        response.redirect("/task-detail")
    }
    else if (service == "Academies accounts return"){
        response.redirect("/task-detail")
    }
    else if (service == "Academies Chart of Accounts"){
        response.redirect("/task-detail")
    }
    else if (service == "Academies sector annual reports and accounts"){
        response.redirect("/task-detail")
    }
})