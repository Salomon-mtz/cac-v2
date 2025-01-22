import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle, Info, X, AlertCircle } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

const notificationIcons = {
  success: <CheckCircle className="text-green-500" size={20} />,
  error: <AlertTriangle className="text-red-500" size={20} />,
  info: <Info className="text-blue-500" size={20} />,
  warning: <AlertCircle className="text-yellow-500" size={20} />,
};

const notificationColors = {
  success: 'bg-green-500/10 border-green-500/20',
  error: 'bg-red-500/10 border-red-500/20',
  info: 'bg-blue-500/10 border-blue-500/20',
  warning: 'bg-yellow-500/10 border-yellow-500/20',
};

const Notifications = () => {
  const { notifications, removeNotification } = useApp();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className={`
              flex items-center gap-3 p-4 rounded-lg border
              min-w-[300px] max-w-md shadow-lg
              ${notificationColors[notification.type || 'info']}
            `}
          >
            {notificationIcons[notification.type || 'info']}
            <div className="flex-grow">
              {notification.title && (
                <h4 className="font-medium text-light mb-1">
                  {notification.title}
                </h4>
              )}
              <p className="text-light/80 text-sm">
                {notification.message}
              </p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="p-1 hover:bg-light/10 rounded-full transition-colors"
            >
              <X size={16} className="text-light/60" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Notifications;