import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase'


export const UpgradePrompt: React.FC = () => {
  const [tier, setTier] = useState<string | null>(null);
  const [showEmail, setShowEmail] = useState(false);


  
useEffect(() => {
  const fetchTier = async () => {
    try {
      const cachedTier = localStorage.getItem('user_tier');
      if (cachedTier) {
        setTier(cachedTier);
        return; // Skip API call if we already have it
      }

      const {
        data: { session },
        error: sessionError
      } = await supabase.auth.getSession();

      if (sessionError || !session?.user?.id) {
        console.error('No session or user found:', sessionError);
        return;
      }

      const userId = session.user.id;

      const { data, error } = await supabase
        .from('users')
        .select('tier')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching tier:', error.message);
        return;
      }

      if (data?.tier) {
        setTier(data.tier);
        localStorage.setItem('user_tier', data.tier); // cache it
      }
    } catch (err) {
      console.error('Unexpected error fetching tier:', err);
    }
  };

  fetchTier();
}, []);




  const handleUpgradeClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.add('hidden')
    setShowEmail(true);

  };

  if (tier !== 'free') return null;

  return (
    <div className="p-4 rounded-lg border-2 border-orange-300 text-center max-w-md mx-auto my-4 bg-stone-100 shadow-lg">
      <p className="mb-3 text-stone-800 font-bold">Upgrade to view more tactical gear</p>
      <button
        onClick ={(e)=>handleUpgradeClick(e)}
        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-black uppercase tracking-wide transition-colors duration-200 shadow-lg"
      >
        Upgrade Mission
      </button>
      {showEmail && (
        <p className="mt-4 text-sm text-stone-700 font-medium">
          Send an upgrade request to <strong className="text-orange-600">support@pricesniper.com</strong>
        </p>
      )}
    </div>
  );
};

export default UpgradePrompt;