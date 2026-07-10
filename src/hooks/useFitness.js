import { useContext } from 'react';
import { FitnessContext } from '../context/FitnessContext';

/**
 * Custom hook to safely consume FitnessContext.
 * Ensures the hook is consumed within a FitnessProvider wrapper.
 */
export const useFitness = () => {
  const context = useContext(FitnessContext);
  
  if (!context) {
    throw new Error('useFitness must be used within a FitnessProvider');
  }
  
  return context;
};
