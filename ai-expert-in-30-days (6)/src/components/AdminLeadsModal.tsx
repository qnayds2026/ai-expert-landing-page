import React, { useState, useEffect } from 'react';
import { X, Download, Trash2, Users, Database, Clock, RefreshCw } from 'lucide-react';

interface SubmissionData {
  timestamp: string;
  fullName: string;
  email: string;
  whatsapp: string;
  countryCity: string;
  occupation: string;
  aiKnowledge: string;
  aiGoal: string;
  currentTools: string;
  biggestChallenge: string;
  learningPreference: string;
  investmentBudget: string;
  valuableOutcome: string;
  considerJoining: string;
  source: string;
}

interface AdminLeadsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLeadsModal: React.FC<AdminLeadsModalProps> = ({ isOpen, onClose }) => {
  const [leads, setLeads] = useState<SubmissionData[]>([]);

  const loadLeads = () => {
    try {
      const data = JSON.parse(localStorage.getItem('qnayds_masterclass_leads') || '[]');
      setLeads(data);
    } catch {
      setLeads([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleExportCSV = () => {
    if (leads.length === 0) return;
    const headers = [
      'Timestamp',
      'Full Name',
      'Email',
      'WhatsApp',
      'Country & City',
      'Occupation',
      'AI Knowledge',
      'AI Goal',
      'Current Tools',
      'Biggest Challenge',
      'Learning Preference',
      'Realistic Budget',
      'Valuable Outcome',
      'Consider Joining',
      'Source'
    ];

    const rows = leads.map(l => [
      `"${l.timestamp || ''}"`,
      `"${(l.fullName || '').replace(/"/g, '""')}"`,
      `"${(l.email || '').replace(/"/g, '""')}"`,
      `"${(l.whatsapp || '').replace(/"/g, '""')}"`,
      `"${(l.countryCity || '').replace(/"/g, '""')}"`,
      `"${(l.occupation || '').replace(/"/g, '""')}"`,
      `"${(l.aiKnowledge || '').replace(/"/g, '""')}"`,
      `"${(l.aiGoal || '').replace(/"/g, '""')}"`,
      `"${(l.currentTools || '').replace(/"/g, '""')}"`,
      `"${(l.biggestChallenge || '').replace(/"/g, '""')}"`,
      `"${(l.learningPreference || '').replace(/"/g, '""')}"`,
      `"${(l.investmentBudget || '').replace(/"/g, '""')}"`,
      `"${(l.valuableOutcome || '').replace(/"/g, '""')}"`,
      `"${(l.considerJoining || '').replace(/"/g, '""')}"`,
      `"${(l.source || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `qnayds_masterclass_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all stored leads on this browser?')) {
      localStorage.removeItem('qnayds_masterclass_leads');
      setLeads([]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Stored Registrations & Leads</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-mono">
                  {leads.length} {leads.length === 1 ? 'Lead' : 'Leads'}
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Data saved in browser localStorage (<code className="text-blue-300">qnayds_masterclass_leads</code>)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadLeads}
              title="Refresh"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="p-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-600">
            <Users className="w-4 h-4 text-blue-600" />
            <span>Total collected submissions on this device: <strong>{leads.length}</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              disabled={leads.length === 0}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export to CSV / Excel</span>
            </button>

            <button
              onClick={handleClear}
              disabled={leads.length === 0}
              className="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>
        </div>

        {/* Table / List */}
        <div className="flex-1 overflow-auto p-4">
          {leads.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <Database className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="font-semibold text-slate-700">No leads submitted on this browser yet</p>
              <p className="text-xs text-slate-500 mt-1">
                When someone submits the "Join Free Session" form, their response will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">Name</th>
                    <th className="py-2.5 px-3">WhatsApp</th>
                    <th className="py-2.5 px-3">Email</th>
                    <th className="py-2.5 px-3">Country/City</th>
                    <th className="py-2.5 px-3">Occupation</th>
                    <th className="py-2.5 px-3">AI Goal</th>
                    <th className="py-2.5 px-3">Budget</th>
                    <th className="py-2.5 px-3">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {leads.map((lead, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2.5 px-3 text-slate-400 font-mono">{idx + 1}</td>
                      <td className="py-2.5 px-3 font-bold text-slate-900 whitespace-nowrap">{lead.fullName}</td>
                      <td className="py-2.5 px-3 text-blue-600 font-mono whitespace-nowrap">
                        <a href={`https://wa.me/${lead.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="hover:underline">
                          {lead.whatsapp}
                        </a>
                      </td>
                      <td className="py-2.5 px-3 text-slate-600 whitespace-nowrap">{lead.email}</td>
                      <td className="py-2.5 px-3 text-slate-700 whitespace-nowrap">{lead.countryCity}</td>
                      <td className="py-2.5 px-3 text-slate-700 whitespace-nowrap">{lead.occupation}</td>
                      <td className="py-2.5 px-3 text-slate-600 max-w-[200px] truncate" title={lead.aiGoal}>
                        {lead.aiGoal}
                      </td>
                      <td className="py-2.5 px-3 text-emerald-700 font-medium whitespace-nowrap">
                        {lead.investmentBudget || '—'}
                      </td>
                      <td className="py-2.5 px-3 text-slate-400 font-mono text-[10px] whitespace-nowrap flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{new Date(lead.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer info note */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Tip: Connect Google Sheets via <code className="text-slate-700 font-bold">sheetConfig.ts</code> for global cloud syncing.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
