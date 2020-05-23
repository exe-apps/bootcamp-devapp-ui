// API Gateway Endpoint
const API_GATEWAY_URL = 'http://localhost:8100';

// Developer endpoints
const DEVELOPER_URL = API_GATEWAY_URL + '/developer-api/developers';
const DEVELOPER_ID_URL = API_GATEWAY_URL + '/developer-api/developers/{devId}';

// Skill endpoints
const SKILL_URL = API_GATEWAY_URL + '/skill-api/skills';
const SKILL_ID_URL = API_GATEWAY_URL + '/skill-api/skills/{skillId}';

// Assessment endpoints
const ALL_ASSESSMENT_URL = API_GATEWAY_URL + '/assessment-api/assessments';
const DEV_ASSESSMENT_URL = API_GATEWAY_URL + '/assessment-api/{devId}/assessments';
const DEV_ASSESSMENT_UPDATE_URL = API_GATEWAY_URL + '/assessment-api/{devId}/assessments/{assessmentId}';

// Report endpoints
const GENERATE_REPORT_URL = API_GATEWAY_URL + '/assessment-api/reports';

export {
    DEVELOPER_URL,
    DEVELOPER_ID_URL,
    SKILL_URL,
    SKILL_ID_URL,
    ALL_ASSESSMENT_URL,
    DEV_ASSESSMENT_URL,
    DEV_ASSESSMENT_UPDATE_URL,
    GENERATE_REPORT_URL
}