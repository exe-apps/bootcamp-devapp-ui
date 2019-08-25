// Developer endpoints
const DEVELOPER_URL = 'http://localhost:8081/developer';
const DEVELOPER_ID_URL = 'http://localhost:8081/developer/{devId}';

// Skill endpoints
const SKILL_URL = 'http://localhost:8081/skill';
const SKILL_ID_URL = 'http://localhost:8081/skill/{skillId}';

// Assessment endpoints
const ALL_ASSESSMENT_URL = 'http://localhost:8081/developer/assessment';
const DEV_ASSESSMENT_URL = 'http://localhost:8081/developer/{devId}/assessment';
const DEV_ASSESSMENT_UPDATE_URL = 'http://localhost:8081/developer/{devId}/assessment/{assessmentId}';

// Report endpoints
const GENERATE_REPORT_URL = 'http://localhost:8081/developer/report';

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