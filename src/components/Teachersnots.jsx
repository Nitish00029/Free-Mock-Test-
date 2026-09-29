import React, { useState } from 'react';

// ----------------------------------------------------------------------
// 1. SUBJECT ICONS (Auto icon mapping)
// ----------------------------------------------------------------------
const subjectIcons = {
  physics: '⚛️',
  chemistry: '🧪',
  mathematics: '📐',
  maths: '📐',
  math: '📐',
  biology: '🧬',
  english: '📖',
  hindi: '📕',
  history: '🏛️',
  geography: '🌍',
  computer: '💻',
  cs: '💻',
  economics: '📊',
  accountancy: '🧾',
  business: '💼',
  science: '🔬',
  arts: '🎨',
  music: '🎵',
  default: '🎓',
};

const getIcon = (teacher) => {
  if (teacher.icon) return teacher.icon;

  const subject = (teacher.subject || '').toLowerCase().trim();
  if (!subject) return subjectIcons.default;

  // 1. Pehle poora exact match try karo
  if (subjectIcons[subject]) return subjectIcons[subject];

  // 2. Subject ke har word ko check karo (start se)
  const words = subject.split(/[\s(),./\-_]+/).filter(Boolean);
  for (const word of words) {
    if (subjectIcons[word]) return subjectIcons[word];
  }

  // 3. Partial match - agar koi icon key subject ke andar kahin bhi mile
  const keys = Object.keys(subjectIcons).filter((k) => k !== 'default');
  for (const key of keys) {
    if (subject.includes(key)) return subjectIcons[key];
  }

  return subjectIcons.default;
};

// ----------------------------------------------------------------------
// 2. DATA
// ----------------------------------------------------------------------
const teachers = [
  {
    id: 1,
    name: 'Amit Niraj Sehgal  Why Grammar',
    subject: 'English(Verb 1)',
    driveLink: 'https://drive.google.com/file/d/1CMI_K6toQu1Me_UNEp1leQ62y8ZpgIP-/view?usp=drivesdk',
  },
  // {
  //   id: 2,
  //   name: 'Dr. Mehta',
  //   subject: 'Chemistry',
  //   driveLink: 'https://drive.google.com/file/d/PASTE_YOUR_LINK_HERE_2/view?usp=drivesdk',
  // },
  // {
  //   id: 3,
  //   name: 'Mrs. Kapoor',
  //   subject: 'Mathematics',
  //   driveLink: 'https://drive.google.com/file/d/PASTE_YOUR_LINK_HERE_3/view?usp=drivesdk',
  // },
  // {
  //   id: 4,
  //   name: 'Mr. Verma',
  //   subject: 'Biology',
  //   driveLink: 'https://drive.google.com/file/d/PASTE_YOUR_LINK_HERE_4/view?usp=drivesdk',
  // },
  // {
  //   id: 5,
  //   name: 'Ms. Rao',
  //   subject: 'English',
  //   driveLink: 'https://drive.google.com/file/d/PASTE_YOUR_LINK_HERE_5/view?usp=drivesdk',
  // },
];

// ----------------------------------------------------------------------
// 3. COMPONENT
// ----------------------------------------------------------------------
const TeacherNotes = () => {
  const [selectedTeacherId, setSelectedTeacherId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [focused, setFocused] = useState(false);

  const filteredTeachers = teachers.filter(
    (t) =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
      t.subject.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const handleTeacherClick = (teacher) => {
    setSelectedTeacherId(teacher.id);
    window.open(teacher.driveLink, '_blank', 'noopener,noreferrer');
  };

  // ----- Styles -----
  const styles = {
    // 🌈 Full page with rich gradient + radial glow
    page: {
      minHeight: '100vh',
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
      background:
        'radial-gradient(ellipse at top left, #4c1d95 0%, #1e1b4b 40%, #0f0a2e 100%)',
      position: 'relative',
      overflow: 'hidden',
    },

    // 🎨 Extra radial glow layers
    glowTop: {
      position: 'absolute',
      top: '-200px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '900px',
      height: '600px',
      background:
        'radial-gradient(ellipse, rgba(168, 85, 247, 0.35) 0%, transparent 60%)',
      pointerEvents: 'none',
      filter: 'blur(40px)',
    },

    blob1: {
      position: 'absolute',
      top: '20%',
      left: '-150px',
      width: '450px',
      height: '450px',
      borderRadius: '50%',
      background:
        'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)',
      filter: 'blur(70px)',
      pointerEvents: 'none',
      animation: 'pulse 7s ease-in-out infinite',
    },
    blob2: {
      position: 'absolute',
      bottom: '-150px',
      right: '-150px',
      width: '500px',
      height: '500px',
      borderRadius: '50%',
      background:
        'radial-gradient(circle, rgba(236, 72, 153, 0.45) 0%, transparent 70%)',
      filter: 'blur(80px)',
      pointerEvents: 'none',
      animation: 'pulse 9s ease-in-out infinite',
    },

    // ⭐ Navbar — glass + gradient bottom border
    navbar: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 40px',
      background: 'rgba(15, 10, 46, 0.75)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(139, 92, 246, 0.25)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.35)',
    },

    logoWrap: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer',
    },

    logoBadge: {
      width: '42px',
      height: '42px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      boxShadow: '0 8px 22px rgba(139, 92, 246, 0.5)',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      fontSize: '1.3rem',
    },

    logoText: {
      color: '#ffffff',
      fontWeight: 700,
      fontSize: '1rem',
      letterSpacing: '0.3px',
      background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },

    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },

    navLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '7px',
      color: 'rgba(255, 255, 255, 0.75)',
      textDecoration: 'none',
      padding: '9px 16px',
      borderRadius: '10px',
      fontSize: '0.92rem',
      fontWeight: 500,
      transition: 'all 0.22s ease',
      border: '1px solid transparent',
      cursor: 'pointer',
    },

    // 📦 Main content wrapper
    content: {
      position: 'relative',
      zIndex: 1,
      minHeight: 'calc(100vh - 72px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
    },

    container: {
      position: 'relative',
      width: '100%',
      maxWidth: '560px',
      padding: '38px 32px',
      borderRadius: '26px',
      background:
        'linear-gradient(135deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.05) 100%)',
      backdropFilter: 'blur(28px)',
      WebkitBackdropFilter: 'blur(28px)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      boxShadow:
        '0 30px 80px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
      zIndex: 1,
    },

    iconBadgeWrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
      position: 'relative',
    },

    iconBadgeGlow: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      background:
        'conic-gradient(from 0deg, #8b5cf6, #ec4899, #8b5cf6, #ec4899, #8b5cf6)',
      filter: 'blur(22px)',
      opacity: 0.6,
      animation: 'spin 8s linear infinite',
      pointerEvents: 'none',
    },

    iconBadge: {
      position: 'relative',
      width: '76px',
      height: '76px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '22px',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      boxShadow:
        '0 14px 36px rgba(139, 92, 246, 0.6), 0 0 0 7px rgba(255, 255, 255, 0.07)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      animation: 'float 3s ease-in-out infinite',
    },

    heading: {
      margin: '0 0 6px',
      fontSize: '1.8rem',
      fontWeight: 700,
      textAlign: 'center',
      letterSpacing: '-0.02em',
      background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 60%, #f0abfc 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
    },

    booksIcon: {
      fontSize: '1.6rem',
      WebkitTextFillColor: 'initial',
      filter: 'drop-shadow(0 4px 12px rgba(196, 181, 253, 0.6))',
    },

    subHeading: {
      textAlign: 'center',
      color: 'rgba(255, 255, 255, 0.7)',
      margin: '0 0 28px',
      fontSize: '0.92rem',
      fontWeight: 400,
    },

    searchWrapper: {
      position: 'relative',
      marginBottom: '24px',
    },

    searchIcon: {
      position: 'absolute',
      left: '18px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '1rem',
      color: focused ? '#c4b5fd' : 'rgba(255, 255, 255, 0.5)',
      pointerEvents: 'none',
      transition: 'color 0.25s ease',
      zIndex: 2,
    },

    searchBox: {
      width: '100%',
      padding: '16px 18px 16px 48px',
      fontSize: '0.98rem',
      borderRadius: '14px',
      border: focused
        ? '1.5px solid rgba(196, 181, 253, 0.9)'
        : '1.5px solid rgba(255, 255, 255, 0.15)',
      outline: 'none',
      boxSizing: 'border-box',
      background: 'rgba(255, 255, 255, 0.07)',
      color: '#ffffff',
      transition: 'all 0.25s ease',
      boxShadow: focused
        ? '0 0 0 4px rgba(139, 92, 246, 0.28), 0 10px 30px rgba(139, 92, 246, 0.35)'
        : '0 4px 14px rgba(0, 0, 0, 0.2)',
      fontFamily: 'inherit',
    },

    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },

    listItem: {
      marginBottom: '10px',
    },

    button: (isSelected) => ({
      width: '100%',
      padding: '18px 20px',
      fontSize: '1rem',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      cursor: 'pointer',
      borderRadius: '16px',
      border: isSelected
        ? '1.5px solid rgba(236, 72, 153, 0.9)'
        : '1.5px solid rgba(255, 255, 255, 0.15)',
      background: isSelected
        ? 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)'
        : 'linear-gradient(135deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.04) 100%)',
      color: '#ffffff',
      transition: 'all 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: isSelected
        ? '0 16px 40px rgba(236, 72, 153, 0.55)'
        : '0 2px 10px rgba(0, 0, 0, 0.18)',
      transform: isSelected ? 'translateY(-3px)' : 'translateY(0)',
      fontFamily: 'inherit',
      fontWeight: 500,
      position: 'relative',
      overflow: 'hidden',
    }),

    iconBox: (isSelected) => ({
      width: '54px',
      height: '54px',
      minWidth: '54px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.55rem',
      borderRadius: '15px',
      background: isSelected
        ? 'rgba(255, 255, 255, 0.3)'
        : 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.4))',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      transition: 'all 0.28s ease',
      boxShadow: isSelected
        ? '0 6px 18px rgba(255, 255, 255, 0.25)'
        : 'inset 0 1px 3px rgba(255, 255, 255, 0.12)',
    }),

    nameBlock: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      flex: 1,
    },

    name: {
      fontWeight: 600,
      fontSize: '1.06rem',
      letterSpacing: '-0.01em',
    },

    subject: {
      fontSize: '0.8rem',
      color: 'rgba(255, 255, 255, 0.65)',
      fontWeight: 400,
    },

    arrow: {
      fontSize: '1.1rem',
      color: 'rgba(255, 255, 255, 0.5)',
      transition: 'all 0.28s ease',
    },

    noResult: {
      textAlign: 'center',
      color: 'rgba(255, 255, 255, 0.7)',
      padding: '30px 16px',
      fontSize: '0.9rem',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '14px',
      border: '1px dashed rgba(255, 255, 255, 0.2)',
    },
  };

  return (
    <div style={styles.page}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>

      {/* Background decorative layers */}
      <div style={styles.glowTop}></div>
      <div style={styles.blob1}></div>
      <div style={styles.blob2}></div>

      {/* ⭐ Navbar
      <nav style={styles.navbar}>
        <div style={styles.logoWrap}>
          <div style={styles.logoBadge}>🎓</div>
          <span style={styles.logoText}>EduNotes</span>
        </div>
        <div style={styles.navLinks}>
          {[
            { icon: '🏠', label: 'Home' },
            { icon: '📘', label: 'My Courses' },
            { icon: 'ℹ️', label: 'About' },
            { icon: '✉️', label: 'Contact' },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              style={styles.navLink}
              onClick={(e) => e.preventDefault()}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.18)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = 'rgba(196, 181, 253, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <span>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      </nav> */}

      {/* 📦 Main content */}
      <div style={styles.content}>
        <div style={styles.container}>
          {/* Icon badge with rotating glow */}
          <div style={styles.iconBadgeWrapper}>
            <div style={styles.iconBadgeGlow}></div>
            <div style={styles.iconBadge}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
          </div>

          <h1 style={styles.heading}>
            <span style={styles.booksIcon}>📚</span>
            Teacher's Notes
          </h1>
          <p style={styles.subHeading}>
            Select a teacher to open their notes.
          </p>

          {/* Search Box */}
          <div style={styles.searchWrapper}>
            <span style={styles.searchIcon}>🔍</span>
            <input
              type="text"
              placeholder="Search by name or subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              style={styles.searchBox}
            />
          </div>

          {/* Teacher List */}
          {filteredTeachers.length > 0 ? (
            <ul style={styles.list}>
              {filteredTeachers.map((teacher) => {
                const isSelected = selectedTeacherId === teacher.id;
                const icon = getIcon(teacher);
                return (
                  <li key={teacher.id} style={styles.listItem}>
                    <button
                      style={styles.button(isSelected)}
                      onClick={() => handleTeacherClick(teacher)}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.background =
                            'linear-gradient(135deg, rgba(139, 92, 246, 0.35) 0%, rgba(236, 72, 153, 0.35) 100%)';
                          e.currentTarget.style.transform = 'translateY(-3px)';
                          e.currentTarget.style.borderColor =
                            'rgba(196, 181, 253, 0.7)';
                          e.currentTarget.style.boxShadow =
                            '0 16px 34px rgba(139, 92, 246, 0.4)';
                          const arrow = e.currentTarget.querySelector('.arrow');
                          if (arrow) {
                            arrow.style.color = '#c4b5fd';
                            arrow.style.transform = 'translateX(5px)';
                          }
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.background =
                            'linear-gradient(135deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.04) 100%)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.borderColor =
                            'rgba(255, 255, 255, 0.15)';
                          e.currentTarget.style.boxShadow =
                            '0 2px 10px rgba(0, 0, 0, 0.18)';
                          const arrow = e.currentTarget.querySelector('.arrow');
                          if (arrow) {
                            arrow.style.color = 'rgba(255, 255, 255, 0.5)';
                            arrow.style.transform = 'translateX(0)';
                          }
                        }
                      }}
                    >
                      <span style={styles.iconBox(isSelected)}>{icon}</span>
                      <span style={styles.nameBlock}>
                        <span style={styles.name}>{teacher.name}</span>
                        <span style={styles.subject}>{teacher.subject}</span>
                      </span>
                      <span className="arrow" style={styles.arrow}>
                        →
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p style={styles.noResult}>
              No teacher found matching "{searchTerm}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherNotes;
