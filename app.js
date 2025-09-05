// Enhanced Chess Academy Management System JavaScript - FIXED VERSION

// Enhanced Application Data with detailed student information
let academyData = {
  "students": [
    {
      "id": 1,
      "name": "Alex Chen",
      "age": 12,
      "lichessUsername": "alexchess2024",
      "email": "alex.chen@email.com",
      "joinDate": "2024-01-15",
      "coach": "GM Sarah Williams",
      "ratings": {
        "classical": {
          "current": 1450,
          "peak": 1480,
          "history": [1200, 1250, 1300, 1380, 1450, 1465, 1450],
          "games": 45,
          "wins": 25,
          "losses": 15,
          "draws": 5,
          "accuracy": 78.5,
          "avgCentipawnLoss": 85
        },
        "rapid": {
          "current": 1520,
          "peak": 1550,
          "history": [1300, 1350, 1400, 1480, 1520, 1535, 1520],
          "games": 68,
          "wins": 38,
          "losses": 22,
          "draws": 8,
          "accuracy": 82.3,
          "avgCentipawnLoss": 78
        },
        "blitz": {
          "current": 1380,
          "peak": 1420,
          "history": [1150, 1200, 1280, 1350, 1380, 1405, 1380],
          "games": 120,
          "wins": 72,
          "losses": 40,
          "draws": 8,
          "accuracy": 75.2,
          "avgCentipawnLoss": 95
        },
        "bullet": {
          "current": 1280,
          "peak": 1310,
          "history": [1000, 1080, 1150, 1220, 1280, 1295, 1280],
          "games": 85,
          "wins": 48,
          "losses": 32,
          "draws": 5,
          "accuracy": 68.9,
          "avgCentipawnLoss": 120
        },
        "puzzles": {
          "current": 1680,
          "peak": 1720,
          "history": [1400, 1480, 1550, 1620, 1680, 1705, 1680],
          "solved": 1250,
          "attempts": 1420,
          "accuracy": 88.0,
          "themes": {
            "tactics": 92,
            "endgame": 85,
            "pins": 94,
            "forks": 90,
            "backRank": 88,
            "discovery": 86
          }
        }
      },
      "recentGames": [
        {
          "id": 1,
          "opponent": "ChessPlayer123",
          "result": "win",
          "timeControl": "classical",
          "date": "2025-09-04",
          "moves": 42,
          "accuracy": 85.2,
          "blunders": 0,
          "mistakes": 2,
          "inaccuracies": 5,
          "opening": "Sicilian Defense: Najdorf",
          "timeUsed": "1:45:30"
        },
        {
          "id": 2,
          "opponent": "TacticalMaster",
          "result": "loss",
          "timeControl": "rapid",
          "date": "2025-09-03",
          "moves": 38,
          "accuracy": 72.1,
          "blunders": 1,
          "mistakes": 3,
          "inaccuracies": 7,
          "opening": "Queen's Gambit Declined",
          "timeUsed": "9:45"
        },
        {
          "id": 3,
          "opponent": "BlitzKing99",
          "result": "win",
          "timeControl": "blitz",
          "date": "2025-09-02",
          "moves": 35,
          "accuracy": 79.8,
          "blunders": 0,
          "mistakes": 1,
          "inaccuracies": 6,
          "opening": "King's Indian Defense",
          "timeUsed": "4:20"
        }
      ],
      "monthlyStats": {
        "gamesPlayed": 32,
        "winRate": 65.6,
        "averageAccuracy": 78.2,
        "blundersPerGame": 0.4,
        "timeInTrouble": 15.3,
        "openingSuccess": 72.5,
        "endgameConversion": 85.0
      },
      "improvementAreas": [
        "Time management in rapid games",
        "Endgame technique in rook endings",
        "Opening preparation depth"
      ],
      "strengths": [
        "Tactical vision and calculation",
        "Middlegame planning",
        "Avoiding blunders"
      ],
      "goals": [
        "Reach 1500 classical rating by end of month",
        "Reduce blunders to 0.2 per game",
        "Master rook endgames"
      ]
    },
    {
      "id": 2,
      "name": "Emma Rodriguez",
      "age": 14,
      "lichessUsername": "emma_chess_queen",
      "email": "emma.rodriguez@email.com",
      "joinDate": "2024-02-01",
      "coach": "IM David Park",
      "ratings": {
        "classical": {
          "current": 1680,
          "peak": 1720,
          "history": [1400, 1480, 1550, 1620, 1680, 1705, 1680],
          "games": 52,
          "wins": 34,
          "losses": 14,
          "draws": 4,
          "accuracy": 82.1,
          "avgCentipawnLoss": 72
        },
        "rapid": {
          "current": 1750,
          "peak": 1780,
          "history": [1500, 1580, 1650, 1720, 1750, 1765, 1750],
          "games": 89,
          "wins": 58,
          "losses": 24,
          "draws": 7,
          "accuracy": 84.8,
          "avgCentipawnLoss": 68
        },
        "blitz": {
          "current": 1620,
          "peak": 1650,
          "history": [1380, 1450, 1520, 1580, 1620, 1640, 1620],
          "games": 145,
          "wins": 95,
          "losses": 42,
          "draws": 8,
          "accuracy": 79.5,
          "avgCentipawnLoss": 85
        },
        "bullet": {
          "current": 1480,
          "peak": 1520,
          "history": [1200, 1280, 1360, 1420, 1480, 1505, 1480],
          "games": 98,
          "wins": 62,
          "losses": 30,
          "draws": 6,
          "accuracy": 72.3,
          "avgCentipawnLoss": 105
        },
        "puzzles": {
          "current": 1850,
          "peak": 1880,
          "history": [1600, 1680, 1750, 1820, 1850, 1870, 1850],
          "solved": 1680,
          "attempts": 1820,
          "accuracy": 92.3,
          "themes": {
            "tactics": 95,
            "endgame": 90,
            "pins": 96,
            "forks": 94,
            "backRank": 92,
            "discovery": 89
          }
        }
      },
      "recentGames": [
        {
          "id": 4,
          "opponent": "ChessMaster2000",
          "result": "win",
          "timeControl": "classical",
          "date": "2025-09-05",
          "moves": 48,
          "accuracy": 89.5,
          "blunders": 0,
          "mistakes": 1,
          "inaccuracies": 3,
          "opening": "Caro-Kann Defense",
          "timeUsed": "1:52:15"
        },
        {
          "id": 5,
          "opponent": "StrategicPlayer",
          "result": "draw",
          "timeControl": "rapid",
          "date": "2025-09-04",
          "moves": 65,
          "accuracy": 86.2,
          "blunders": 0,
          "mistakes": 2,
          "inaccuracies": 4,
          "opening": "English Opening",
          "timeUsed": "14:30"
        }
      ],
      "monthlyStats": {
        "gamesPlayed": 28,
        "winRate": 75.0,
        "averageAccuracy": 84.1,
        "blundersPerGame": 0.2,
        "timeInTrouble": 8.5,
        "openingSuccess": 82.1,
        "endgameConversion": 92.3
      },
      "improvementAreas": [
        "Bullet time control accuracy",
        "Complex tactical combinations"
      ],
      "strengths": [
        "Positional understanding",
        "Endgame technique",
        "Opening preparation"
      ],
      "goals": [
        "Break 1800 rapid rating",
        "Improve bullet accuracy to 75%",
        "Win academy championship"
      ]
    },
    {
      "id": 3,
      "name": "Marcus Thompson",
      "age": 10,
      "lichessUsername": "marcus_knight",
      "email": "marcus.thompson@email.com",
      "joinDate": "2024-03-15",
      "coach": "FM Lisa Johnson",
      "ratings": {
        "classical": {
          "current": 950,
          "peak": 980,
          "history": [800, 850, 900, 925, 950, 965, 950],
          "games": 28,
          "wins": 12,
          "losses": 14,
          "draws": 2,
          "accuracy": 68.5,
          "avgCentipawnLoss": 145
        },
        "rapid": {
          "current": 1020,
          "peak": 1050,
          "history": [850, 900, 950, 980, 1020, 1035, 1020],
          "games": 45,
          "wins": 22,
          "losses": 20,
          "draws": 3,
          "accuracy": 72.1,
          "avgCentipawnLoss": 125
        },
        "blitz": {
          "current": 880,
          "peak": 920,
          "history": [700, 750, 800, 850, 880, 905, 880],
          "games": 78,
          "wins": 35,
          "losses": 38,
          "draws": 5,
          "accuracy": 65.8,
          "avgCentipawnLoss": 165
        },
        "bullet": {
          "current": 750,
          "peak": 780,
          "history": [600, 650, 700, 720, 750, 765, 750],
          "games": 42,
          "wins": 18,
          "losses": 22,
          "draws": 2,
          "accuracy": 58.2,
          "avgCentipawnLoss": 185
        },
        "puzzles": {
          "current": 1180,
          "peak": 1220,
          "history": [900, 980, 1050, 1120, 1180, 1205, 1180],
          "solved": 680,
          "attempts": 820,
          "accuracy": 82.9,
          "themes": {
            "tactics": 85,
            "endgame": 75,
            "pins": 88,
            "forks": 82,
            "backRank": 79,
            "discovery": 76
          }
        }
      },
      "recentGames": [
        {
          "id": 6,
          "opponent": "YoungChessPlayer",
          "result": "win",
          "timeControl": "rapid",
          "date": "2025-09-03",
          "moves": 32,
          "accuracy": 75.5,
          "blunders": 1,
          "mistakes": 2,
          "inaccuracies": 8,
          "opening": "Italian Game",
          "timeUsed": "8:45"
        }
      ],
      "monthlyStats": {
        "gamesPlayed": 18,
        "winRate": 50.0,
        "averageAccuracy": 68.9,
        "blundersPerGame": 1.2,
        "timeInTrouble": 25.0,
        "openingSuccess": 55.6,
        "endgameConversion": 62.5
      },
      "improvementAreas": [
        "Reducing blunder frequency",
        "Time management",
        "Basic endgame patterns"
      ],
      "strengths": [
        "Enthusiastic learning attitude",
        "Basic tactical vision",
        "Consistent practice"
      ],
      "goals": [
        "Reach 1000 rapid rating",
        "Solve 100 puzzles per week",
        "Learn basic checkmate patterns"
      ]
    }
  ],
  "coaches": [
    {
      "id": 1,
      "name": "GM Sarah Williams",
      "title": "Grandmaster",
      "rating": 2480,
      "specialization": "Tactical Training & Opening Theory",
      "experience": "8 years",
      "students": [1, 2],
      "avgStudentImprovement": 280,
      "successRate": 85.5
    },
    {
      "id": 2,
      "name": "IM David Park",
      "title": "International Master",
      "rating": 2420,
      "specialization": "Endgame Technique & Strategic Planning",
      "experience": "6 years",
      "students": [2],
      "avgStudentImprovement": 320,
      "successRate": 90.2
    },
    {
      "id": 3,
      "name": "FM Lisa Johnson",
      "title": "FIDE Master",
      "rating": 2280,
      "specialization": "Youth Development & Basic Skills",
      "experience": "5 years",
      "students": [3],
      "avgStudentImprovement": 180,
      "successRate": 78.3
    }
  ]
};

// Global variables
let currentSection = 'dashboard';
let filteredStudents = [];
let charts = {};
let currentStudentProfile = null;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    loadDashboard();
    populateFilters();
    setupEventListeners();
    filteredStudents = [...academyData.students];
    loadStudents();
    loadDetailedReports();
    loadGameAnalysis();
    loadPuzzleTracker();
    loadCoaches();
    loadLichessSync();
}

// FIXED Navigation System
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            if (section) {
                showSection(section);
            }
        });
    });
}

// FIXED showSection function with proper section handling
function showSection(sectionName) {
    console.log('Navigating to section:', sectionName);
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[data-section="${sectionName}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Show/hide sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionName;
    } else {
        console.error('Section not found:', sectionName);
        return;
    }
    
    // Load section-specific data with proper delays for charts
    switch(sectionName) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'students':
            loadStudents();
            break;
        case 'detailed-reports':
            loadDetailedReports();
            break;
        case 'game-analysis':
            loadGameAnalysis();
            break;
        case 'puzzle-tracker':
            loadPuzzleTracker();
            break;
        case 'analytics':
            // Add delay for chart rendering
            setTimeout(() => loadAnalytics(), 200);
            break;
        case 'coaches':
            loadCoaches();
            break;
        case 'lichess':
            loadLichessSync();
            break;
        default:
            console.error('Unknown section:', sectionName);
    }
}

// Enhanced Dashboard
function loadDashboard() {
    const stats = calculateEnhancedStats();
    
    const totalStudentsEl = document.getElementById('total-students');
    const avgRatingEl = document.getElementById('avg-rating');
    const avgAccuracyEl = document.getElementById('avg-accuracy');
    const puzzlesSolvedEl = document.getElementById('puzzles-solved');
    
    if (totalStudentsEl) totalStudentsEl.textContent = stats.totalStudents;
    if (avgRatingEl) avgRatingEl.textContent = stats.avgRating;
    if (avgAccuracyEl) avgAccuracyEl.textContent = `${stats.avgAccuracy}%`;
    if (puzzlesSolvedEl) puzzlesSolvedEl.textContent = stats.puzzlesSolved;
    
    loadPerformanceHighlights();
}

function calculateEnhancedStats() {
    const totalStudents = academyData.students.length;
    const totalRating = academyData.students.reduce((sum, student) => 
        sum + student.ratings.rapid.current, 0);
    const avgRating = Math.round(totalRating / totalStudents);
    
    const totalAccuracy = academyData.students.reduce((sum, student) => 
        sum + student.ratings.rapid.accuracy, 0);
    const avgAccuracy = Math.round((totalAccuracy / totalStudents) * 10) / 10;
    
    const puzzlesSolved = academyData.students.reduce((sum, student) => 
        sum + student.ratings.puzzles.solved, 0);
    
    return {
        totalStudents,
        avgRating,
        avgAccuracy,
        puzzlesSolved
    };
}

function loadPerformanceHighlights() {
    const highlights = [
        { icon: '🏆', text: 'Emma Rodriguez achieved 1850 puzzle rating', detail: 'New personal best' },
        { icon: '📈', text: 'Alex Chen improved classical rating by 50 points', detail: 'This month' },
        { icon: '🎯', text: 'Average academy accuracy improved to 76.8%', detail: '2.3% increase from last month' },
        { icon: '⚡', text: 'Marcus Thompson solved 150 puzzles', detail: 'Weekly goal achieved' }
    ];
    
    const container = document.getElementById('performance-highlights');
    if (container) {
        container.innerHTML = highlights.map(highlight => `
            <div class="highlight-item">
                <div class="highlight-icon">${highlight.icon}</div>
                <div class="highlight-content">
                    <div class="highlight-text">${highlight.text}</div>
                    <div class="highlight-detail">${highlight.detail}</div>
                </div>
            </div>
        `).join('');
    }
}

// Enhanced Students Section with FIXED profile modal
function loadStudents() {
    if (!filteredStudents || filteredStudents.length === 0) {
        filteredStudents = [...academyData.students];
    }
    renderStudentsTable();
}

function renderStudentsTable() {
    const tbody = document.getElementById('students-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = filteredStudents.map(student => {
        return `
            <tr onclick="viewStudentProfile(${student.id})" style="cursor: pointer;" data-student-id="${student.id}">
                <td>
                    <div class="student-name">${student.name}</div>
                    <div class="student-username">@${student.lichessUsername}</div>
                </td>
                <td>${student.age}</td>
                <td>
                    <div class="rating-cell">${student.ratings.classical.current}</div>
                    <div class="rating-growth positive">+${student.ratings.classical.current - student.ratings.classical.history[0]}</div>
                </td>
                <td>
                    <div class="rating-cell">${student.ratings.rapid.current}</div>
                    <div class="rating-growth positive">+${student.ratings.rapid.current - student.ratings.rapid.history[0]}</div>
                </td>
                <td>
                    <div class="rating-cell">${student.ratings.blitz.current}</div>
                    <div class="rating-growth positive">+${student.ratings.blitz.current - student.ratings.blitz.history[0]}</div>
                </td>
                <td>
                    <div class="rating-cell">${student.ratings.puzzles.current}</div>
                    <div class="rating-growth positive">+${student.ratings.puzzles.current - student.ratings.puzzles.history[0]}</div>
                </td>
                <td>${student.monthlyStats.averageAccuracy}%</td>
                <td>${student.coach}</td>
                <td>
                    <div class="table-actions">
                        <button class="btn btn-sm btn--outline" onclick="event.stopPropagation(); generateDetailedReport(${student.id})">Report</button>
                        <button class="btn btn-sm btn--primary" onclick="event.stopPropagation(); analyzeStudentGames(${student.id})">Games</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// FIXED Enhanced Student Profile with working tabs and time control comparison
function viewStudentProfile(studentId) {
    const student = academyData.students.find(s => s.id === studentId);
    if (!student) return;
    
    currentStudentProfile = student;
    
    const profileNameEl = document.getElementById('profile-student-name');
    if (profileNameEl) {
        profileNameEl.textContent = `${student.name} - Detailed Profile`;
    }
    
    const profileContent = document.getElementById('student-profile-content');
    if (profileContent) {
        profileContent.innerHTML = `
            <div class="student-profile-tabs">
                <button class="profile-tab active" onclick="showProfileTab('overview')">Overview</button>
                <button class="profile-tab" onclick="showProfileTab('ratings')">Rating Analysis</button>
                <button class="profile-tab" onclick="showProfileTab('games')">Game History</button>
                <button class="profile-tab" onclick="showProfileTab('puzzles')">Puzzle Performance</button>
                <button class="profile-tab" onclick="showProfileTab('goals')">Goals & Progress</button>
                <button class="profile-tab" onclick="showProfileTab('reports')">Export Reports</button>
            </div>

            <div id="profile-overview" class="profile-tab-content active">
                <div class="profile-overview">
                    <div class="profile-basic-info">
                        <div class="profile-avatar-large">♟️</div>
                        <div class="profile-detail-grid">
                            <div class="profile-detail-item">
                                <div class="profile-detail-label">Age</div>
                                <div class="profile-detail-value">${student.age} years</div>
                            </div>
                            <div class="profile-detail-item">
                                <div class="profile-detail-label">Coach</div>
                                <div class="profile-detail-value">${student.coach}</div>
                            </div>
                            <div class="profile-detail-item">
                                <div class="profile-detail-label">Join Date</div>
                                <div class="profile-detail-value">${formatDate(student.joinDate)}</div>
                            </div>
                            <div class="profile-detail-item">
                                <div class="profile-detail-label">Lichess</div>
                                <div class="profile-detail-value">@${student.lichessUsername}</div>
                            </div>
                        </div>
                    </div>
                    <div class="performance-metrics">
                        <div class="metric-item">
                            <div class="metric-value">${student.monthlyStats.gamesPlayed}</div>
                            <div class="metric-label">Games This Month</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-value">${student.monthlyStats.winRate}%</div>
                            <div class="metric-label">Win Rate</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-value">${student.monthlyStats.averageAccuracy}%</div>
                            <div class="metric-label">Avg Accuracy</div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-value">${student.monthlyStats.blundersPerGame}</div>
                            <div class="metric-label">Blunders/Game</div>
                        </div>
                    </div>
                </div>
                
                <div class="improvement-areas">
                    <h5>Areas for Improvement</h5>
                    <ul class="area-list">
                        ${student.improvementAreas.map(area => `<li>${area}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="strengths">
                    <h5>Key Strengths</h5>
                    <ul class="area-list">
                        ${student.strengths.map(strength => `<li>${strength}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div id="profile-ratings" class="profile-tab-content">
                <div class="card" style="margin-bottom: 24px;">
                    <div class="card__body">
                        <h4>Time Control Comparison</h4>
                        <div class="chart-container" style="position: relative; height: 300px;">
                            <canvas id="time-control-comparison-chart"></canvas>
                        </div>
                    </div>
                </div>
                <div class="rating-charts-grid">
                    <div class="card">
                        <div class="card__body">
                            <h4>Classical Rating Progression</h4>
                            <div class="chart-container" style="position: relative; height: 200px;">
                                <canvas id="classical-chart"></canvas>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__body">
                            <h4>Rapid Rating Progression</h4>
                            <div class="chart-container" style="position: relative; height: 200px;">
                                <canvas id="rapid-chart"></canvas>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__body">
                            <h4>Blitz Rating Progression</h4>
                            <div class="chart-container" style="position: relative; height: 200px;">
                                <canvas id="blitz-chart"></canvas>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__body">
                            <h4>Puzzle Rating Progression</h4>
                            <div class="chart-container" style="position: relative; height: 200px;">
                                <canvas id="puzzle-chart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="profile-games" class="profile-tab-content">
                <div class="games-analysis-grid">
                    ${student.recentGames.map(game => `
                        <div class="game-card" onclick="analyzeGameDetailed(${game.id}, ${student.id})">
                            <div class="game-header">
                                <h5>vs ${game.opponent}</h5>
                                <div class="game-result ${game.result}">${game.result.toUpperCase()}</div>
                            </div>
                            <div class="game-details">
                                <div class="game-detail">
                                    <span class="game-detail-label">Time Control:</span>
                                    <span class="game-detail-value">${game.timeControl}</span>
                                </div>
                                <div class="game-detail">
                                    <span class="game-detail-label">Date:</span>
                                    <span class="game-detail-value">${formatDate(game.date)}</span>
                                </div>
                                <div class="game-detail">
                                    <span class="game-detail-label">Opening:</span>
                                    <span class="game-detail-value">${game.opening}</span>
                                </div>
                                <div class="game-detail">
                                    <span class="game-detail-label">Moves:</span>
                                    <span class="game-detail-value">${game.moves}</span>
                                </div>
                            </div>
                            <div class="accuracy-bar">
                                <div class="accuracy-fill" style="width: ${game.accuracy}%"></div>
                            </div>
                            <div class="mistake-summary">
                                <span>Accuracy: ${game.accuracy}%</span>
                                <span class="mistake-count">B:${game.blunders} M:${game.mistakes} I:${game.inaccuracies}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div id="profile-puzzles" class="profile-tab-content">
                <div class="puzzle-student-card">
                    <div class="puzzle-header">
                        <h4>Puzzle Performance</h4>
                        <div class="puzzle-rating">${student.ratings.puzzles.current}</div>
                    </div>
                    <div class="puzzle-stats">
                        <div class="puzzle-stat">
                            <div class="puzzle-stat-value">${student.ratings.puzzles.solved}</div>
                            <div class="puzzle-stat-label">Solved</div>
                        </div>
                        <div class="puzzle-stat">
                            <div class="puzzle-stat-value">${student.ratings.puzzles.accuracy}%</div>
                            <div class="puzzle-stat-label">Accuracy</div>
                        </div>
                        <div class="puzzle-stat">
                            <div class="puzzle-stat-value">${student.ratings.puzzles.attempts}</div>
                            <div class="puzzle-stat-label">Attempts</div>
                        </div>
                        <div class="puzzle-stat">
                            <div class="puzzle-stat-value">${student.ratings.puzzles.peak}</div>
                            <div class="puzzle-stat-label">Peak Rating</div>
                        </div>
                    </div>
                    <div class="theme-mastery">
                        <h5>Theme Mastery</h5>
                        <div class="theme-list">
                            ${Object.entries(student.ratings.puzzles.themes).map(([theme, score]) => 
                                `<div class="theme-tag">${theme}: ${score}%</div>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <div id="profile-goals" class="profile-tab-content">
                <div class="card">
                    <div class="card__header">
                        <h4>Current Goals</h4>
                        <button class="btn btn--sm btn--primary" onclick="addNewGoal(${student.id})">Add New Goal</button>
                    </div>
                    <div class="card__body">
                        <ul class="area-list">
                            ${student.goals.map((goal, index) => `
                                <li style="display: flex; justify-content: space-between; align-items: center;">
                                    <span>${goal}</span>
                                    <button class="btn btn--sm btn--outline" onclick="markGoalComplete(${student.id}, ${index})">Complete</button>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card__header">
                        <h4>Long-term Improvement Trends</h4>
                    </div>
                    <div class="card__body">
                        <div class="chart-container" style="position: relative; height: 250px;">
                            <canvas id="improvement-trends-chart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <div id="profile-reports" class="profile-tab-content">
                <div class="card">
                    <div class="card__body">
                        <h4>Generate Individual Report</h4>
                        <p>Create a comprehensive performance report for ${student.name}</p>
                        <div class="report-actions">
                            <button class="btn btn--primary" onclick="exportStudentPDF(${student.id})">Export PDF Report</button>
                            <button class="btn btn--secondary" onclick="emailStudentReport(${student.id})">Email to Parents</button>
                            <button class="btn btn--outline" onclick="generateMonthlyReport(${student.id})">Monthly Summary</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    showModal('student-profile-modal');
}

// FIXED showProfileTab function
function showProfileTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Find the clicked tab and make it active
    const clickedTab = [...document.querySelectorAll('.profile-tab')].find(tab => 
        tab.textContent.toLowerCase().includes(tabName.toLowerCase()) ||
        tab.onclick?.toString().includes(tabName)
    );
    
    if (clickedTab) {
        clickedTab.classList.add('active');
    }
    
    // Show/hide tab content
    document.querySelectorAll('.profile-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const targetContent = document.getElementById(`profile-${tabName}`);
    if (targetContent) {
        targetContent.classList.add('active');
    }
    
    // Load specific content based on tab
    if (tabName === 'ratings' && currentStudentProfile) {
        setTimeout(() => {
            renderStudentRatingCharts(currentStudentProfile);
            renderTimeControlComparison(currentStudentProfile);
        }, 100);
    } else if (tabName === 'goals' && currentStudentProfile) {
        setTimeout(() => {
            renderImprovementTrends(currentStudentProfile);
        }, 100);
    }
}

// NEW: Time Control Comparison Chart
function renderTimeControlComparison(student) {
    const ctx = document.getElementById('time-control-comparison-chart');
    if (!ctx) return;
    
    if (charts.timeControlComparison) {
        charts.timeControlComparison.destroy();
    }
    
    const timeControls = ['Classical', 'Rapid', 'Blitz', 'Bullet'];
    const currentRatings = [
        student.ratings.classical.current,
        student.ratings.rapid.current,
        student.ratings.blitz.current,
        student.ratings.bullet.current
    ];
    const peakRatings = [
        student.ratings.classical.peak,
        student.ratings.rapid.peak,
        student.ratings.blitz.peak,
        student.ratings.bullet.peak
    ];
    
    charts.timeControlComparison = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: timeControls,
            datasets: [{
                label: 'Current Rating',
                data: currentRatings,
                backgroundColor: '#1FB8CD'
            }, {
                label: 'Peak Rating',
                data: peakRatings,
                backgroundColor: '#FFC185'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    min: Math.min(...currentRatings) - 100
                }
            }
        }
    });
}

// NEW: Improvement Trends Chart
function renderImprovementTrends(student) {
    const ctx = document.getElementById('improvement-trends-chart');
    if (!ctx) return;
    
    if (charts.improvementTrends) {
        charts.improvementTrends.destroy();
    }
    
    charts.improvementTrends = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Start', 'Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Current'],
            datasets: [{
                label: 'Rapid Rating',
                data: student.ratings.rapid.history,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }, {
                label: 'Puzzle Rating',
                data: student.ratings.puzzles.history,
                borderColor: '#FFC185',
                backgroundColor: 'rgba(255, 193, 133, 0.1)',
                borderWidth: 2,
                fill: false,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

function renderStudentRatingCharts(student) {
    const chartTypes = ['classical', 'rapid', 'blitz', 'puzzle'];
    
    chartTypes.forEach(type => {
        const canvasId = type === 'puzzle' ? 'puzzle-chart' : `${type}-chart`;
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;
        
        const ratingKey = type === 'puzzle' ? 'puzzles' : type;
        const ratingData = student.ratings[ratingKey];
        
        if (charts[canvasId]) {
            charts[canvasId].destroy();
        }
        
        charts[canvasId] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Start', 'Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Current'],
                datasets: [{
                    label: `${type.charAt(0).toUpperCase() + type.slice(1)} Rating`,
                    data: ratingData.history,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: Math.min(...ratingData.history) - 50
                    }
                }
            }
        });
    });
}

// Detailed Reports Section
function loadDetailedReports() {
    populateReportFilters();
    renderDetailedReports();
}

function populateReportFilters() {
    const studentFilter = document.getElementById('report-student-filter');
    if (studentFilter) {
        studentFilter.innerHTML = '<option value="">All Students</option>' +
            academyData.students.map(student => 
                `<option value="${student.id}">${student.name}</option>`
            ).join('');
    }
}

function renderDetailedReports() {
    const container = document.getElementById('detailed-reports-container');
    if (!container) return;
    
    container.innerHTML = academyData.students.map(student => `
        <div class="detailed-report-card">
            <div class="report-header">
                <div class="student-info">
                    <h4>${student.name}</h4>
                    <div class="student-details">Age: ${student.age} • Coach: ${student.coach}</div>
                </div>
                <div class="overall-grade">
                    <div class="grade-circle">A-</div>
                    <div style="font-size: 12px; color: var(--color-text-secondary);">Overall</div>
                </div>
            </div>
            
            <div class="performance-metrics">
                <div class="metric-item">
                    <div class="metric-value">${student.monthlyStats.averageAccuracy}%</div>
                    <div class="metric-label">Avg Accuracy</div>
                </div>
                <div class="metric-item">
                    <div class="metric-value">${student.monthlyStats.gamesPlayed}</div>
                    <div class="metric-label">Games Played</div>
                </div>
                <div class="metric-item">
                    <div class="metric-value">${student.ratings.puzzles.solved}</div>
                    <div class="metric-label">Puzzles Solved</div>
                </div>
                <div class="metric-item">
                    <div class="metric-value">${student.monthlyStats.winRate}%</div>
                    <div class="metric-label">Win Rate</div>
                </div>
            </div>
            
            <div class="rating-breakdown">
                <div class="rating-item">
                    <span class="rating-label">Classical</span>
                    <span class="rating-value">${student.ratings.classical.current} (+${student.ratings.classical.current - student.ratings.classical.history[0]})</span>
                </div>
                <div class="rating-item">
                    <span class="rating-label">Rapid</span>
                    <span class="rating-value">${student.ratings.rapid.current} (+${student.ratings.rapid.current - student.ratings.rapid.history[0]})</span>
                </div>
                <div class="rating-item">
                    <span class="rating-label">Blitz</span>
                    <span class="rating-value">${student.ratings.blitz.current} (+${student.ratings.blitz.current - student.ratings.blitz.history[0]})</span>
                </div>
                <div class="rating-item">
                    <span class="rating-label">Puzzles</span>
                    <span class="rating-value">${student.ratings.puzzles.current} (+${student.ratings.puzzles.current - student.ratings.puzzles.history[0]})</span>
                </div>
            </div>
            
            <div class="improvement-areas">
                <h5>Focus Areas</h5>
                <ul class="area-list">
                    ${student.improvementAreas.slice(0, 2).map(area => `<li>${area}</li>`).join('')}
                </ul>
            </div>
            
            <div class="strengths">
                <h5>Key Strengths</h5>
                <ul class="area-list">
                    ${student.strengths.slice(0, 2).map(strength => `<li>${strength}</li>`).join('')}
                </ul>
            </div>
            
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--color-border);">
                <button class="btn btn-sm btn--primary" onclick="generateDetailedReport(${student.id})">Generate Full Report</button>
                <button class="btn btn-sm btn--outline" onclick="exportStudentPDF(${student.id})">Export PDF</button>
            </div>
        </div>
    `).join('');
}

// Game Analysis Section
function loadGameAnalysis() {
    populateAnalysisFilters();
    renderGameAnalysis();
}

function populateAnalysisFilters() {
    const studentFilter = document.getElementById('analysis-student-filter');
    if (studentFilter) {
        studentFilter.innerHTML = '<option value="">All Students</option>' +
            academyData.students.map(student => 
                `<option value="${student.id}">${student.name}</option>`
            ).join('');
    }
}

function renderGameAnalysis() {
    const container = document.getElementById('games-container');
    if (!container) return;
    
    let allGames = [];
    academyData.students.forEach(student => {
        student.recentGames.forEach(game => {
            allGames.push({...game, studentName: student.name, studentId: student.id});
        });
    });
    
    container.innerHTML = allGames.map(game => `
        <div class="game-card" onclick="analyzeGameDetailed(${game.id}, ${game.studentId})">
            <div class="game-header">
                <div>
                    <h5>${game.studentName} vs ${game.opponent}</h5>
                    <div style="font-size: 12px; color: var(--color-text-secondary);">${game.timeControl} • ${formatDate(game.date)}</div>
                </div>
                <div class="game-result ${game.result}">${game.result.toUpperCase()}</div>
            </div>
            <div class="game-details">
                <div class="game-detail">
                    <span class="game-detail-label">Opening:</span>
                    <span class="game-detail-value">${game.opening}</span>
                </div>
                <div class="game-detail">
                    <span class="game-detail-label">Moves:</span>
                    <span class="game-detail-value">${game.moves}</span>
                </div>
                <div class="game-detail">
                    <span class="game-detail-label">Time Used:</span>
                    <span class="game-detail-value">${game.timeUsed}</span>
                </div>
            </div>
            <div class="accuracy-bar">
                <div class="accuracy-fill" style="width: ${game.accuracy}%"></div>
            </div>
            <div class="mistake-summary">
                <span>Accuracy: ${game.accuracy}%</span>
                <span class="mistake-count">Blunders: ${game.blunders} • Mistakes: ${game.mistakes}</span>
            </div>
        </div>
    `).join('');
}

// Puzzle Tracker Section - FIXED
function loadPuzzleTracker() {
    setTimeout(() => {
        renderPuzzleOverview();
        renderPuzzleDetails();
    }, 100);
}

function renderPuzzleOverview() {
    const ctx = document.getElementById('puzzle-overview-chart');
    if (!ctx) return;
    
    if (charts.puzzleOverview) {
        charts.puzzleOverview.destroy();
    }
    
    const studentNames = academyData.students.map(s => s.name);
    const puzzleRatings = academyData.students.map(s => s.ratings.puzzles.current);
    
    charts.puzzleOverview = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: studentNames,
            datasets: [{
                label: 'Puzzle Rating',
                data: puzzleRatings,
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function renderPuzzleDetails() {
    const container = document.getElementById('puzzle-details-container');
    if (!container) return;
    
    container.innerHTML = academyData.students.map(student => `
        <div class="puzzle-student-card">
            <div class="puzzle-header">
                <h4>${student.name}</h4>
                <div class="puzzle-rating">${student.ratings.puzzles.current}</div>
            </div>
            <div class="puzzle-stats">
                <div class="puzzle-stat">
                    <div class="puzzle-stat-value">${student.ratings.puzzles.solved}</div>
                    <div class="puzzle-stat-label">Solved</div>
                </div>
                <div class="puzzle-stat">
                    <div class="puzzle-stat-value">${student.ratings.puzzles.accuracy}%</div>
                    <div class="puzzle-stat-label">Accuracy</div>
                </div>
                <div class="puzzle-stat">
                    <div class="puzzle-stat-value">${student.ratings.puzzles.attempts}</div>
                    <div class="puzzle-stat-label">Total Attempts</div>
                </div>
                <div class="puzzle-stat">
                    <div class="puzzle-stat-value">${student.ratings.puzzles.peak}</div>
                    <div class="puzzle-stat-label">Peak Rating</div>
                </div>
            </div>
            <div class="theme-mastery">
                <h5>Theme Performance</h5>
                <div class="theme-list">
                    ${Object.entries(student.ratings.puzzles.themes).map(([theme, score]) => 
                        `<div class="theme-tag">${theme.charAt(0).toUpperCase() + theme.slice(1)}: ${score}%</div>`
                    ).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// FIXED Analytics with proper chart rendering
function loadAnalytics() {
    setTimeout(() => {
        renderRatingDistributionChart();
        renderAccuracyChart();
        renderBlunderChart();
        renderPuzzleThemesChart();
    }, 300);
}

function renderRatingDistributionChart() {
    const ctx = document.getElementById('rating-distribution-chart');
    if (!ctx) return;
    
    if (charts.ratingDistribution) {
        charts.ratingDistribution.destroy();
    }
    
    const timeControls = ['Classical', 'Rapid', 'Blitz', 'Bullet'];
    const datasets = academyData.students.map((student, index) => ({
        label: student.name,
        data: [
            student.ratings.classical.current,
            student.ratings.rapid.current,
            student.ratings.blitz.current,
            student.ratings.bullet.current
        ],
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'][index % 3]
    }));
    
    charts.ratingDistribution = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: timeControls,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 500
                }
            }
        }
    });
}

function renderAccuracyChart() {
    const ctx = document.getElementById('accuracy-chart');
    if (!ctx) return;
    
    if (charts.accuracyChart) {
        charts.accuracyChart.destroy();
    }
    
    const studentNames = academyData.students.map(s => s.name);
    const accuracyData = academyData.students.map(s => s.monthlyStats.averageAccuracy);
    
    charts.accuracyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: studentNames,
            datasets: [{
                label: 'Average Accuracy (%)',
                data: accuracyData,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 60,
                    max: 90
                }
            }
        }
    });
}

function renderBlunderChart() {
    const ctx = document.getElementById('blunder-chart');
    if (!ctx) return;
    
    if (charts.blunderChart) {
        charts.blunderChart.destroy();
    }
    
    const studentNames = academyData.students.map(s => s.name);
    const blunderData = academyData.students.map(s => s.monthlyStats.blundersPerGame);
    
    charts.blunderChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: studentNames,
            datasets: [{
                label: 'Blunders per Game',
                data: blunderData,
                backgroundColor: '#B4413C'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 2
                }
            }
        }
    });
}

function renderPuzzleThemesChart() {
    const ctx = document.getElementById('puzzle-themes-chart');
    if (!ctx) return;
    
    if (charts.puzzleThemesChart) {
        charts.puzzleThemesChart.destroy();
    }
    
    // Average theme performance across all students
    const themes = Object.keys(academyData.students[0].ratings.puzzles.themes);
    const avgThemeScores = themes.map(theme => {
        const total = academyData.students.reduce((sum, student) => 
            sum + student.ratings.puzzles.themes[theme], 0);
        return Math.round(total / academyData.students.length);
    });
    
    charts.puzzleThemesChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: themes.map(theme => theme.charAt(0).toUpperCase() + theme.slice(1)),
            datasets: [{
                label: 'Average Academy Performance',
                data: avgThemeScores,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.2)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Enhanced Coaches Section
function loadCoaches() {
    const container = document.getElementById('coaches-container');
    if (!container) return;
    
    container.innerHTML = academyData.coaches.map(coach => {
        const students = academyData.students.filter(s => coach.students.includes(s.id));
        
        return `
            <div class="coach-card">
                <div class="coach-header">
                    <div class="coach-avatar">♔</div>
                    <div class="coach-info">
                        <h3>${coach.name}</h3>
                        <div class="coach-title">${coach.title} • Rating: ${coach.rating}</div>
                    </div>
                </div>
                <div class="coach-performance">
                    <div class="coach-metric">
                        <div class="coach-metric-value">${coach.avgStudentImprovement}</div>
                        <div class="coach-metric-label">Avg Improvement</div>
                    </div>
                    <div class="coach-metric">
                        <div class="coach-metric-value">${coach.successRate}%</div>
                        <div class="coach-metric-label">Success Rate</div>
                    </div>
                    <div class="coach-metric">
                        <div class="coach-metric-value">${students.length}</div>
                        <div class="coach-metric-label">Students</div>
                    </div>
                </div>
                <div style="margin-bottom: 16px;">
                    <div style="font-size: 14px; color: var(--color-text-secondary); margin-bottom: 8px;">
                        <strong>Specialization:</strong> ${coach.specialization}
                    </div>
                    <div style="font-size: 14px; color: var(--color-text-secondary);">
                        <strong>Experience:</strong> ${coach.experience}
                    </div>
                </div>
                <div class="coach-students">
                    <strong style="font-size: 14px;">Assigned Students:</strong>
                    <div class="student-list">
                        ${students.map(student => `
                            <span class="student-tag">${student.name}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Lichess Integration
function loadLichessSync() {
    renderSyncHistory();
}

function renderSyncHistory() {
    const container = document.getElementById('sync-history-container');
    if (!container) return;
    
    const syncHistory = [
        { description: 'Full student data sync completed', time: '2 hours ago', status: 'success' },
        { description: 'Rating updates for all students', time: '6 hours ago', status: 'success' },
        { description: 'Game import completed (45 new games)', time: '1 day ago', status: 'success' },
        { description: 'Puzzle data sync', time: '1 day ago', status: 'success' },
        { description: 'Connection timeout (retried successfully)', time: '2 days ago', status: 'warning' }
    ];
    
    container.innerHTML = syncHistory.map(item => `
        <div class="sync-item">
            <div class="sync-details">
                <div class="sync-description">${item.description}</div>
                <div class="sync-time">${item.time}</div>
            </div>
            <div class="status status--${item.status}">
                ${item.status === 'success' ? 'Success' : 'Warning'}
            </div>
        </div>
    `).join('');
}

// Modal and Interaction Functions
function setupEventListeners() {
    // Search and filter functionality
    const studentSearch = document.getElementById('student-search');
    if (studentSearch) {
        studentSearch.addEventListener('input', filterStudents);
    }
    
    const coachFilter = document.getElementById('coach-filter');
    if (coachFilter) {
        coachFilter.addEventListener('change', filterStudents);
    }
    
    const ratingFilter = document.getElementById('rating-filter');
    if (ratingFilter) {
        ratingFilter.addEventListener('change', filterStudents);
    }
    
    // Report modal student select
    const reportModalSelect = document.getElementById('report-modal-student-select');
    if (reportModalSelect) {
        reportModalSelect.addEventListener('change', function() {
            if (this.value) {
                generateReportPreview(parseInt(this.value));
            }
        });
    }
}

function populateFilters() {
    // Coach filter
    const coachFilter = document.getElementById('coach-filter');
    if (coachFilter) {
        const coaches = [...new Set(academyData.students.map(s => s.coach))];
        coachFilter.innerHTML = '<option value="">All Coaches</option>' +
            coaches.map(coach => `<option value="${coach}">${coach}</option>`).join('');
    }
    
    // Report modal student select
    const reportModalSelect = document.getElementById('report-modal-student-select');
    if (reportModalSelect) {
        reportModalSelect.innerHTML = '<option value="">Choose Student</option>' +
            academyData.students.map(student => 
                `<option value="${student.id}">${student.name}</option>`
            ).join('');
    }
    
    // Game import student select
    const importStudentSelect = document.getElementById('import-student-select');
    if (importStudentSelect) {
        importStudentSelect.innerHTML = '<option value="">Select Student</option>' +
            academyData.students.map(student => 
                `<option value="${student.id}">${student.name}</option>`
            ).join('');
    }
    
    // Add student coach select
    const coachSelect = document.getElementById('coach-select');
    if (coachSelect) {
        coachSelect.innerHTML = academyData.coaches.map(coach => 
            `<option value="${coach.name}">${coach.name}</option>`
        ).join('');
    }
}

function filterStudents() {
    const searchInput = document.getElementById('student-search');
    const coachFilter = document.getElementById('coach-filter');
    const ratingFilter = document.getElementById('rating-filter');
    
    if (!searchInput || !coachFilter || !ratingFilter) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCoach = coachFilter.value;
    const selectedRating = ratingFilter.value;
    
    filteredStudents = academyData.students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm) ||
                            student.lichessUsername.toLowerCase().includes(searchTerm);
        const matchesCoach = !selectedCoach || student.coach === selectedCoach;
        
        let matchesRating = true;
        if (selectedRating) {
            const rating = student.ratings.rapid.current;
            switch(selectedRating) {
                case '600-1000':
                    matchesRating = rating >= 600 && rating < 1000;
                    break;
                case '1000-1400':
                    matchesRating = rating >= 1000 && rating < 1400;
                    break;
                case '1400-1800':
                    matchesRating = rating >= 1400 && rating < 1800;
                    break;
                case '1800+':
                    matchesRating = rating >= 1800;
                    break;
            }
        }
        
        return matchesSearch && matchesCoach && matchesRating;
    });
    
    renderStudentsTable();
}

// NEW Action Functions - Enhanced for missing functionality

// FIXED Individual Game Analysis
function analyzeGameDetailed(gameId, studentId) {
    const student = academyData.students.find(s => s.id === studentId);
    const game = student.recentGames.find(g => g.id === gameId);
    
    document.getElementById('game-analysis-title').textContent = `Detailed Game Analysis: ${student.name} vs ${game.opponent}`;
    
    const content = document.getElementById('game-analysis-content');
    content.innerHTML = `
        <div class="game-analysis-details">
            <div class="card">
                <div class="card__header">
                    <h4>Game Overview</h4>
                </div>
                <div class="card__body">
                    <div class="profile-detail-grid">
                        <div class="profile-detail-item">
                            <div class="profile-detail-label">Result</div>
                            <div class="profile-detail-value">${game.result.toUpperCase()}</div>
                        </div>
                        <div class="profile-detail-item">
                            <div class="profile-detail-label">Time Control</div>
                            <div class="profile-detail-value">${game.timeControl}</div>
                        </div>
                        <div class="profile-detail-item">
                            <div class="profile-detail-label">Opening</div>
                            <div class="profile-detail-value">${game.opening}</div>
                        </div>
                        <div class="profile-detail-item">
                            <div class="profile-detail-label">Moves</div>
                            <div class="profile-detail-value">${game.moves}</div>
                        </div>
                        <div class="profile-detail-item">
                            <div class="profile-detail-label">Accuracy</div>
                            <div class="profile-detail-value">${game.accuracy}%</div>
                        </div>
                        <div class="profile-detail-item">
                            <div class="profile-detail-label">Time Used</div>
                            <div class="profile-detail-value">${game.timeUsed}</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card__header">
                    <h4>Move-by-Move Analysis</h4>
                </div>
                <div class="card__body">
                    <div class="mistake-breakdown">
                        <div class="mistake-item" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--color-border);">
                            <span class="mistake-label">Blunders:</span>
                            <span class="mistake-value">${game.blunders}</span>
                            <span class="mistake-description">Moves losing 300+ centipawns</span>
                        </div>
                        <div class="mistake-item" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--color-border);">
                            <span class="mistake-label">Mistakes:</span>
                            <span class="mistake-value">${game.mistakes}</span>
                            <span class="mistake-description">Moves losing 100-300 centipawns</span>
                        </div>
                        <div class="mistake-item" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0;">
                            <span class="mistake-label">Inaccuracies:</span>
                            <span class="mistake-value">${game.inaccuracies}</span>
                            <span class="mistake-description">Moves losing 50-100 centipawns</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card__header">
                    <h4>Critical Position Analysis</h4>
                </div>
                <div class="card__body">
                    <p><strong>Opening Phase:</strong> ${game.accuracy > 85 ? 'Excellent preparation' : 'Room for improvement in opening knowledge'}</p>
                    <p><strong>Middle Game:</strong> ${game.mistakes <= 2 ? 'Strong positional play' : 'Focus on calculation and planning'}</p>
                    <p><strong>Endgame:</strong> ${game.blunders === 0 ? 'Clean technique' : 'Study basic endgame patterns'}</p>
                </div>
            </div>
            
            <div class="card">
                <div class="card__header">
                    <h4>Key Insights & Recommendations</h4>
                </div>
                <div class="card__body">
                    <ul>
                        <li>Strong opening preparation in the ${game.opening}</li>
                        <li>Good time management with ${game.timeUsed} used</li>
                        <li>Maintained accuracy of ${game.accuracy}% throughout the game</li>
                        <li>${game.blunders === 0 ? 'Excellent blunder avoidance - keep up the focus!' : 'Work on reducing critical mistakes by double-checking key moves'}</li>
                        <li>Next lesson focus: ${game.timeControl === 'blitz' ? 'Pattern recognition for faster play' : 'Deep calculation training'}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    showModal('game-analysis-modal');
}

// NEW Goal Management Functions
function addNewGoal(studentId) {
    const goalText = prompt('Enter a new goal for this student:');
    if (goalText && goalText.trim()) {
        const student = academyData.students.find(s => s.id === studentId);
        student.goals.push(goalText.trim());
        alert(`Goal added successfully: "${goalText}"`);
        // Refresh the goals tab
        showProfileTab('goals');
    }
}

function markGoalComplete(studentId, goalIndex) {
    const student = academyData.students.find(s => s.id === studentId);
    const completedGoal = student.goals[goalIndex];
    
    if (confirm(`Mark this goal as complete?\n\n"${completedGoal}"`)) {
        student.goals.splice(goalIndex, 1);
        alert('Goal marked as complete! 🎉');
        // Refresh the goals tab
        showProfileTab('goals');
    }
}

// Enhanced Action Functions
function showAddStudentModal() {
    showModal('add-student-modal');
}

function addStudent() {
    const form = document.getElementById('add-student-form');
    if (!form) return;
    
    const formData = new FormData(form);
    
    // Simulate adding student
    alert(`Student ${formData.get('name')} would be added to the system with:\n• Age: ${formData.get('age')}\n• Coach: ${formData.get('coach')}\n• Email: ${formData.get('email')}\n• Lichess: @${formData.get('lichessUsername')}`);
    
    hideModal('add-student-modal');
    form.reset();
}

function showStudentReportModal() {
    showModal('student-report-modal');
}

function generateReportPreview(studentId) {
    const student = academyData.students.find(s => s.id === studentId);
    if (!student) return;
    
    const container = document.getElementById('report-preview-container');
    if (container) {
        container.innerHTML = `
            <div class="card">
                <div class="card__body">
                    <h4>Report Preview - ${student.name}</h4>
                    <p>This comprehensive report will include:</p>
                    <ul>
                        <li>All rating progressions with detailed charts</li>
                        <li>Game analysis summary (${student.recentGames.length} recent games)</li>
                        <li>Puzzle performance breakdown (${student.ratings.puzzles.solved} puzzles solved)</li>
                        <li>Time control performance comparison</li>
                        <li>Improvement recommendations</li>
                        <li>Coach feedback and goals</li>
                        <li>Parent-friendly performance summary</li>
                    </ul>
                </div>
            </div>
        `;
    }
}

function showGameImportModal() {
    showModal('game-import-modal');
}

function importGame() {
    const studentSelect = document.getElementById('import-student-select');
    const methodSelect = document.getElementById('import-method');
    const gameDataInput = document.getElementById('game-data-input');
    
    if (!studentSelect.value) {
        alert('Please select a student first.');
        return;
    }
    
    const student = academyData.students.find(s => s.id === parseInt(studentSelect.value));
    const method = methodSelect.value;
    const gameData = gameDataInput.value;
    
    if (!gameData.trim()) {
        alert('Please provide game data to import.');
        return;
    }
    
    alert(`Game import initiated for ${student.name}:\n• Method: ${method}\n• Data length: ${gameData.length} characters\n\nThis would normally:\n• Parse the game data\n• Run engine analysis\n• Generate accuracy report\n• Add to student's game history\n• Update performance metrics`);
    
    hideModal('game-import-modal');
    gameDataInput.value = '';
}

function analyzeStudentGames(studentId) {
    const student = academyData.students.find(s => s.id === studentId);
    alert(`Opening game analysis interface for ${student.name}...\n\nShowing ${student.recentGames.length} recent games with:\n• Move-by-move accuracy\n• Opening analysis\n• Tactical opportunities\n• Time management review\n• Improvement suggestions`);
    showSection('game-analysis');
}

function generateDetailedReport(studentId) {
    const student = academyData.students.find(s => s.id === studentId);
    alert(`Generating comprehensive report for ${student.name}...\n\nThis detailed report includes:\n• Complete rating analysis across all time controls\n• Game performance breakdown with ${student.recentGames.length} analyzed games\n• Puzzle mastery assessment (${student.ratings.puzzles.accuracy}% accuracy)\n• Time control performance comparison\n• Individual improvement recommendations\n• Coach feedback and monthly goals\n• Progress tracking with visual charts`);
}

function generateMonthlyReport(studentId) {
    const student = academyData.students.find(s => s.id === studentId);
    alert(`Generating monthly summary for ${student.name}...\n\nMonthly highlights:\n• Games played: ${student.monthlyStats.gamesPlayed}\n• Win rate: ${student.monthlyStats.winRate}%\n• Average accuracy: ${student.monthlyStats.averageAccuracy}%\n• Rating improvements across all time controls\n• Goal progress tracking`);
}

function exportStudentPDF(studentId) {
    const student = academyData.students.find(s => s.id === studentId);
    alert(`Exporting comprehensive PDF report for ${student.name}...\n\nThe PDF will include:\n• Professional formatting with academy branding\n• All performance charts and graphs\n• Detailed statistics and metrics\n• Coach recommendations and feedback\n• Progress tracking visualizations\n• Parent-friendly summary section\n\nEstimated generation time: 30 seconds`);
}

function emailStudentReport(studentId) {
    const student = academyData.students.find(s => s.id === studentId);
    alert(`Sending detailed report to parents for ${student.name}...\n\nEmail will be sent to: ${student.email}\n\nIncludes:\n• PDF attachment with full report\n• Executive summary highlights\n• Next lesson recommendations\n• Goal progress update\n• Coach contact information\n\nEmail sent successfully! 📧`);
}

function exportAllReports() {
    alert(`Generating batch reports for all ${academyData.students.length} students...\n\nThis comprehensive process will:\n• Create individual PDF reports for each student\n• Generate academy-wide analytics summary\n• Package all reports in organized ZIP file\n• Create coach performance summaries\n• Send notification email when complete\n\nEstimated time: 5-7 minutes for ${academyData.students.length} students`);
}

function exportReportPDF() {
    const studentSelect = document.getElementById('report-modal-student-select');
    if (!studentSelect.value) {
        alert('Please select a student first.');
        return;
    }
    
    const student = academyData.students.find(s => s.id === parseInt(studentSelect.value));
    exportStudentPDF(student.id);
    hideModal('student-report-modal');
}

function sendReportEmail() {
    const studentSelect = document.getElementById('report-modal-student-select');
    if (!studentSelect.value) {
        alert('Please select a student first.');
        return;
    }
    
    const student = academyData.students.find(s => s.id === parseInt(studentSelect.value));
    emailStudentReport(student.id);
    hideModal('student-report-modal');
}

function performFullSync() {
    alert('Initiating comprehensive Lichess sync...\n\nThis advanced sync will:\n• Update all student ratings across time controls\n• Import new games with full analysis\n• Sync puzzle performance and themes\n• Validate data integrity and consistency\n• Update improvement tracking metrics\n• Generate detailed sync report\n• Backup existing data\n\nEstimated time: 3-5 minutes for full academy sync');
}

function showSyncSettings() {
    alert('Lichess Integration Configuration:\n\n🔐 API Security:\n• API Token: ****...**42 (Valid & Active)\n• Rate limit: 1000 requests/hour\n• Last authentication: Today 4:30 PM\n\n⏰ Sync Schedule:\n• Frequency: Daily at 6:00 AM\n• Auto-import games: Enabled\n• Puzzle sync: Enabled\n• Rating history depth: 6 months\n\n💾 Data Management:\n• Backup retention: 30 days\n• Error logging: Enabled\n• Sync notifications: Academy admin\n\n📊 Performance:\n• Last full sync: 2 hours ago\n• Success rate: 99.2%\n• Average sync time: 45 seconds');
}

// Utility Functions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        // Ensure the modal is properly displayed
        modal.style.display = 'flex';
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
    });
}

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
        e.target.style.display = 'none';
    }
});

// Close modals with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal:not(.hidden)').forEach(modal => {
            modal.classList.add('hidden');
            modal.style.display = 'none';
        });
    }
});

// Make functions globally available
window.showSection = showSection;
window.viewStudentProfile = viewStudentProfile;
window.showProfileTab = showProfileTab;
window.showAddStudentModal = showAddStudentModal;
window.addStudent = addStudent;
window.showStudentReportModal = showStudentReportModal;
window.generateDetailedReport = generateDetailedReport;
window.generateMonthlyReport = generateMonthlyReport;
window.exportStudentPDF = exportStudentPDF;
window.emailStudentReport = emailStudentReport;
window.exportAllReports = exportAllReports;
window.exportReportPDF = exportReportPDF;
window.sendReportEmail = sendReportEmail;
window.showGameImportModal = showGameImportModal;
window.importGame = importGame;
window.analyzeGameDetailed = analyzeGameDetailed;
window.analyzeStudentGames = analyzeStudentGames;
window.addNewGoal = addNewGoal;
window.markGoalComplete = markGoalComplete;
window.performFullSync = performFullSync;
window.showSyncSettings = showSyncSettings;
window.hideModal = hideModal;