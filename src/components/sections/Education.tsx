import React,{useState} from 'react';
import { GraduationCap, Award, Calendar, Star, Trophy } from 'lucide-react';

const Education = () => {
  
  const [selectedCert, setSelectedCert] = useState(null);
  
  const education = [
    {
      school: "GMR Institute of Technology, Vizianagaram",
      degree: "B.Tech in Artificial Intelligence and Data Science",
      period: "2022 – 2026",
      cgpa: "7.84 / 10",
      achievements: [
        "Global Certification in ServiceNow (CSA & CAD).",
        "Shortlisted for Competitive Coding Skills Special Training by GeeksforGeeks (June–July 2025) as part of CRT evaluation."
      ]
    },
    {
      school: "Kendriya Vidyalaya, Vizianagaram",
      degree: "Intermediate (MPC)",
      period: "2020 - 2022",
      percentage: "64%",
      achievements: [
        "Participated in regional athletic events (800m & 1500m)",
        "District-level Kho-Kho (Runners) & Kabaddi representation"
      ]
    }
  ];

  const certifications = [
    {
      title: "ServiceNow Certified Application Developer",
      provider: "ServiceNow",
      year: "2025",
      credentialId: "27163332",
      featured: true
    },
    {
      title: "ServiceNow Certified System Administrator",
      provider: "ServiceNow",
      year: "2025",
      credentialId: "26876577",
      featured: true
    },
    {
      title: "Prompt Engineering for ChatGPT",
      provider: "Vanderbilt University, Coursera",
      year: "2025",
      credentialId: "6Q1CN1H5DGXX",
      featured: false
    },
    {
      title: "Python Programming Associate",
      provider: "CISCO Networking Academy",
      year: "2025",
      credentialId: "db520771f6bb492ab610591c15ffe95d",
      featured: false
    },
    {
      title: "Introduction to Generative AI",
      provider: "Google Cloud, Coursera",
      year: "2025",
      credentialId: "0ZB5GOS2GKXE",
      featured: false
    },
    {
      title: "Introduction to Machine Learning",
      provider: "NPTEL",
      year: "2024",
      credentialId: "NPTEL24CS101S665900378",
      featured: false
    },
    {
      title: "Data Analytics Basics for Everyone",
      provider: "IBM, edX",
      year: "2024",
      credentialId: "db520771f6bb492ab610591c15ffe95d",
      featured: false
    },
    {
      title: "SQL Intermediate",
      provider: "HackerRank",
      year: "2024",
      credentialId: "4E4AB155FC02",
      featured: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 text-slate-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-amber-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            My academic background and professional certifications
          </p>
        </div>

        {/* Education Cards Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-amber-100 dark:from-indigo-500/5 dark:to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">{edu.degree}</h4>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{edu.school}</h5>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1 bg-gradient-to-r from-indigo-500 to-amber-400 rounded">
                    <Award className="text-white" size={16} />
                  </div>
                    {edu.cgpa && (
                      <span className="text-slate-700 dark:text-slate-200 font-medium">CGPA: {edu.cgpa}</span>
                    )}
                    {edu.percentage && (
                      <span className="text-slate-700 dark:text-slate-200 font-medium">Percentage: {edu.percentage}</span>
                    )}
                </div>
                <div>
                  <h6 className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2 flex items-center gap-2">
                    <Trophy size={14} className="text-amber-400" />
                    Key Achievements:
                  </h6>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-amber-400 rounded-full mt-2" />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Below */}
        <div className="mb-8 flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-indigo-500 to-amber-400 rounded-lg">
            <Award className="text-white" size={28} />
          </div>
          <h3 className="text-2xl font-bold">Certifications</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 group relative overflow-hidden"
            >
              {cert.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-amber-400 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 z-20">
                  <Star size={10} />
                  Featured
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-amber-100 dark:from-indigo-500/5 dark:to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white">{cert.title}</h4>
                  <span className="text-sm font-bold bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-300 px-3 top-8 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-2">{cert.provider}</p>
                <div className="text-xs text-slate-500 dark:text-slate-300 bg-slate-200/60 dark:bg-slate-700/50 px-3 py-1 rounded-full inline-block">
                  ID: {cert.credentialId}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
