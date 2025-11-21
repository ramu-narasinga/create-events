import { useRecoilState } from 'recoil';
import { eventFormState } from '../../atoms';
import { useState } from 'react';

interface Question {
  id: string;
  text: string;
}

export const QuestionnairesField = () => {
  const [eventForm, setEventForm] = useRecoilState(eventFormState);
  const data = (eventForm.featureData['questionnaires'] as { questions?: Question[] }) || {};
  const questions = data.questions || [];
  const [newQuestion, setNewQuestion] = useState('');

  const addQuestion = () => {
    if (!newQuestion.trim()) return;

    const question: Question = {
      id: Date.now().toString(),
      text: newQuestion,
    };

    setEventForm((prev) => ({
      ...prev,
      featureData: {
        ...prev.featureData,
        questionnaires: {
          questions: [...questions, question],
        },
      },
    }));

    setNewQuestion('');
  };

  const removeQuestion = (id: string) => {
    setEventForm((prev) => ({
      ...prev,
      featureData: {
        ...prev.featureData,
        questionnaires: {
          questions: questions.filter((q) => q.id !== id),
        },
      },
    }));
  };

  return (
      <div className="glass rounded-2xl p-6">
      <label className="block text-white/80 text-sm font-medium mb-4">
        Event Questionnaire
      </label>

      {questions.length > 0 && (
        <div className="space-y-2 mb-4">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className="flex items-center gap-2 bg-white/5 rounded-lg p-3"
            >
              <span className="text-white/60 text-sm">{index + 1}.</span>
              <span className="flex-1 text-white text-sm">{question.text}</span>
              <button
                onClick={() => removeQuestion(question.id)}
                className="text-red-300 hover:text-red-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addQuestion()}
          placeholder="Add a question..."
          className="flex-1 bg-white/5 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white/40"
        />
        <button
          onClick={addQuestion}
          className="bg-white/20 hover:bg-white/30 text-white rounded-xl px-4 py-2 text-sm font-medium transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  );
};
