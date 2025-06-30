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
    <div className="p-2 rounded-md border border-yellow-600 text-center max-w-md mx-auto my-2">
      <p className="mb-2 text-gray-700">Upgrade to view more</p>
      <button
        onClick ={(e)=>handleUpgradeClick(e)}
        className="bg-yellow-600 text-red px-4 py-2 rounded hover:bg-red-700"
      >
        Upgrade
      </button>
      {showEmail && (
        <p className="mt-4 text-sm text-gray-600">
          Send an upgrade request to <strong>support@pricesniper.com</strong>
        </p>
      )}
    </div>
  );
};

export default UpgradePrompt;