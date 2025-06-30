import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase'
import { Shield, Zap } from 'lucide-react'

export const UpgradePrompt: React.FC = () => {
  const [tier, setTier] = useState<string | null>(null);
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    const fetchTier = async () => {
      try {
        const cachedTier = localStorage.getItem('user_tier');
        if (cachedTier) {
          setTier(cachedTier);
          return;
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
          localStorage.setItem('user_tier', data.tier);
        }
      } catch (err) {
        console.error('Unexpected error fetching tier:', err);
      }
    };

    fetchTier();
  }, []);

  const handleUpgradeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.add('hidden')
    setShowEmail(true);
  };

  if (tier !== 'free') return null;

  return (
    <div className="high-contrast-card p-6 rounded-lg text-center max-w-md mx-auto my-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500"></div>
      
      <div className="flex items-center justify-center mb-4">
        <Shield className="w-8 h-8 text-yellow-500 mr-2 tactical-glow" />
        <h3 className="text-xl font-bold text-white military-heading">UPGRADE CLEARANCE</h3>
      </div>
      
      <p className="mb-4 text-zinc-300 stencil-text">
        UPGRADE TO VIEW MORE TACTICAL DATA
      </p>
      
      <button
        onClick={(e) => handleUpgradeClick(e)}
        className="tactical-button text-white px-6 py-3 rounded-md font-bold stencil-text border-2 border-yellow-500 mb-4"
      >
        <Zap className="w-4 h-4 inline mr-2" />
        UPGRADE NOW
      </button>
      
      {showEmail && (
        <div className="combat-ready p-4 rounded-lg">
          <p className="text-sm text-zinc-300 stencil-text">
            SEND UPGRADE REQUEST TO:{' '}
            <strong className="text-orange-400">support@pricesniper.com</strong>
          </p>
          <div className="text-xs text-orange-400 mt-2 stencil-text">
            RESPONSE TIME: 24-48 HOURS
          </div>
        </div>
      )}
    </div>
  );
};

export default UpgradePrompt;